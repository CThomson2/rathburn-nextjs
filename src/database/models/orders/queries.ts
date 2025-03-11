import { withDatabase } from "../..";
import type {
  OrderQueryParams,
  CreateOrderParams,
  OrdersResponse,
  Order,
} from "@/types/models";
import { OrderStatus, OrderETAStatus } from "@/types/models/orders/constant";
import { Prisma } from "/prisma/generated/client";

export const queries = {
  /**
   * Get a paginated list of orders with optional filtering and sorting
   */
  getOrders: async ({
    page = 1,
    limit = 50,
    sortField = "date_ordered",
    sortOrder = "desc",
    search = "",
    status,
  }: OrderQueryParams): Promise<OrdersResponse> => {
    const offset = (page - 1) * limit;

    return withDatabase(async (db) => {
      // Build where clause for filtering
      const where: Prisma.ordersWhereInput = {};

      // Add search filter if provided
      if (search) {
        where.OR = [
          { supplier: { contains: search, mode: "insensitive" } },
          { material: { contains: search, mode: "insensitive" } },
          { po_number: { contains: search, mode: "insensitive" } },
        ];
      }

      // Add status filter if provided
      if (status) {
        where.status = Array.isArray(status) ? { in: status } : status;
      }

      // Get the total number of matching orders
      const total = await db.orders.count({ where });

      // Get the paginated data
      const rows = await db.orders.findMany({
        where,
        orderBy: [{ [sortField]: sortOrder }, { order_id: "desc" }],
        skip: offset,
        take: limit,
      });

      const orders: Order[] = rows.map((row: any) => ({
        order_id: row.order_id,
        supplier: row.supplier,
        material: row.material,
        quantity: row.quantity,
        date_ordered: row.date_ordered.toISOString(),
        quantity_received: row.quantity_received,
        status: row.status as OrderStatus.Type,
        created_at: row.created_at.toISOString(),
        updated_at: row.updated_at.toISOString(),
        po_number: row.po_number as string | null,
        notes: row.notes,
        eta_start: row.eta_start?.toISOString(),
        eta_end: row.eta_end?.toISOString(),
      }));

      return { orders, total };
    });
  },

  /**
   * Creates a new order in the database.
   * Sets initial status to "pending" and quantity_received to 0.
   * @param data The order data containing supplier, material, quantity and optional notes
   * @returns The created order record
   */
  createOrder: async (data: CreateOrderParams): Promise<Order> => {
    return withDatabase((db) =>
      db.orders.create({
        data: {
          ...data,
          status: "pending",
          quantity_received: 0,
        },
      })
    );
  },

  /**
   * Gets an order by ID and includes all associated deliveries.
   * Uses an inner join - will only return orders that have deliveries.
   * @param orderId The ID of the order to retrieve
   * @returns The order with its deliveries, or null if not found
   */
  getWithDeliveries: async (orderId: number): Promise<Order | null> => {
    return withDatabase((db) =>
      db.orders.findUnique({
        where: {
          order_id: orderId,
        },
        include: {
          deliveries: true,
        },
      })
    );
  },

  /**
   * Gets all orders with a delivery status of "pending".
   * This is used to display active orders (en-route or partially fulfilled) in the sidebar.
   * @returns An array of orders with a delivery status of "pending"
   */
  getActiveOrders: async (): Promise<Order[]> => {
    return withDatabase(async (db) => {
      const orders = await db.orders.findMany({
        where: {
          status: {
            in: ["pending", "partial"],
          },
        },
        orderBy: {
          order_id: "desc",
        },
        select: {
          order_id: true,
          supplier: true,
          material: true,
          quantity: true,
          quantity_received: true,
          status: true,
          eta_start: true,
          eta_end: true,
          po_number: true,
        },
      });

      // Calculate eta_status for each order
      return orders.map((order: any) => {
        let eta_status: OrderETAStatus.Type = OrderETAStatus.TBC;

        if (order.eta_start) {
          eta_status = OrderETAStatus.CONFIRMED;
          if (
            order.eta_end &&
            new Date() > order.eta_end &&
            order.status === OrderStatus.PENDING
          ) {
            eta_status = OrderETAStatus.OVERDUE;
          }
        }

        return {
          ...order,
          eta_status,
        };
      });
    });
  },

  updateStatus: async (
    orderId: number,
    status: OrderStatus.Type
  ): Promise<Order> => {
    return withDatabase((db) =>
      db.orders.update({
        where: {
          order_id: orderId,
        },
        data: {
          status: status,
        },
      })
    );
  },
};
