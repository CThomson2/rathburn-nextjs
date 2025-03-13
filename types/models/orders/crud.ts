import * as t from ".";

/**
 * Fields that are permitted to be updated in the orders table
 */
export type UpdateFields = keyof Pick<
  t.OrderBase,
  | "supplier"
  | "po_number"
  | "material"
  | "quantity"
  | "quantity_received"
  | "date_ordered"
  | "notes"
  | "eta_start"
  | "eta_end"
  | "status"
>;

/**
 * Type-safe CRUD interface for Orders
 */
export interface OrderCRUD {
  /**
   * Create a new order
   */
  create: (data: t.CreateOrderParams) => Promise<t.Order>;

  /**
   * Update specific fields of an order
   * Uses Partial to allow updating only some fields
   */
  update: (
    id: number,
    data: Partial<Pick<t.OrderBase, UpdateFields>>
  ) => Promise<t.Order>;

  /**
   * Delete an order by ID
   */
  delete: (id: number) => Promise<void>;

  /**
   * Get an order by ID
   */
  get: (id: number) => Promise<t.Order>;

  /**
   * Get orders with optional filtering and pagination
   */
  getAll: (params: t.OrderQueryParams) => Promise<t.OrdersResponse>;
}
