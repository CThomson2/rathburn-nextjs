import { withDatabase } from "../../index";
import * as t from "@/types/models";
import { UpdateFields } from "@/types/models/orders/crud";
import { OrderStatus } from "@/types/models/orders/constant";

// TODO: Move queries.ts into this file and generalise crud operatiors using type generics and params
/**
 * Implementation of CRUD operations for the Orders model
 */
export const ordersCrud = {
  /**
   * Create a new order in the database
   */
  create: async (data: t.CreateOrderParams): Promise<t.Order> => {
    return withDatabase((db) =>
      db.orders.create({
        data: {
          ...data,
          status: OrderStatus.PENDING,
          quantity_received: 0,
        },
      })
    );
  },

  /**
   * Update specific fields of an order
   * Uses Partial to allow updating only some fields
   */
  update: async (
    orderId: number,
    data: Partial<Pick<t.OrderBase, UpdateFields>>
  ): Promise<t.Order> => {
    // Automatically set updated_at
    const updateData = {
      ...data,
      updated_at: new Date(),
    };

    return withDatabase((db) =>
      db.orders.update({
        where: { order_id: orderId },
        data: updateData,
      })
    );
  },

  /**
   * Delete an order by ID
   */
  delete: async (orderId: number): Promise<void> => {
    await withDatabase((db) =>
      db.orders.delete({
        where: { order_id: orderId },
      })
    );
  },

  /**
   * Get an order by ID
   */
  get: async (orderId: number): Promise<t.Order> => {
    return withDatabase((db) =>
      db.orders.findUniqueOrThrow({
        where: { order_id: orderId },
      })
    );
  },

  /**
   * Get orders with filtering and pagination
   */
  getAll: async (params: t.OrderQueryParams): Promise<t.OrdersResponse> => {
    const {
      page = 1,
      limit = 50,
      sortField = "date_ordered",
      sortOrder = "desc",
      status,
    } = params;

    const offset = (page - 1) * limit;

    return withDatabase(async (db) => {
      // Build the where clause
      const where = status?.length ? { status: { in: status } } : {};

      // Get the total count
      const total = await db.orders.count({ where });

      // Get paginated data
      const orders = await db.orders.findMany({
        where,
        orderBy: [{ [sortField]: sortOrder }, { order_id: "desc" }],
        skip: offset,
        take: limit,
      });

      return { orders, total };
    });
  },

  /**
   * Get order with all its deliveries
   */
  getWithDeliveries: async (orderId: number): Promise<t.Order | null> => {
    return withDatabase((db) =>
      db.orders.findUnique({
        where: { order_id: orderId },
        include: { deliveries: true },
      })
    );
  },

  /**
   * Get active orders (pending or partial)
   */
  getActive: async (): Promise<t.Order[]> => {
    return withDatabase(async (db) => {
      const activeOrders = await db.orders.findMany({
        where: {
          status: {
            in: [OrderStatus.PENDING, OrderStatus.PARTIAL],
          },
        },
        orderBy: { order_id: "desc" },
      });

      return activeOrders;
    });
  },
};
