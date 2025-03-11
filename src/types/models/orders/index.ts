// import { Prisma } from "/prisma/generated/client";
import { PrismaOrders } from "../base";
import { OrderStatus, OrderETAStatus } from "./constant";

// Base type directly from Prisma schema
export type OrderBase = PrismaOrders;

// Extended type with additional calculated fields
export interface Order extends OrderBase {
  eta_status?: OrderETAStatus.Type;
}

// Query parameters for order listing
export interface OrderQueryParams {
  page: number;
  limit: number;
  sortField?: keyof OrderBase;
  sortOrder?: "asc" | "desc";
  status?: OrderStatus.Type[];
  search?: string;
}

// Response type for order queries
export interface OrdersResponse {
  orders: Order[];
  total: number;
}

// Formatted type for client-side display
export interface FormattedOrder
  extends Omit<
    Order,
    | "created_at"
    | "updated_at"
    | "date_ordered"
    | "notes"
    | "po_number"
    | "eta_start"
    | "eta_end"
  > {
  created_at: string;
  updated_at: string;
  date_ordered: string;
  notes?: string;
  po_number?: string;
  eta_start?: string;
  eta_end?: string;
}

export interface OrderGridItem {
  order_id: number;
  supplier: string;
  material: string;
  quantity: number;
  date_ordered: string;
  quantity_received: number;
  status: OrderStatus.Type;
  po_number?: string | null;
}

// Type for updating order ETA
export interface UpdateOrderETAParams {
  etaStart?: string | null;
  etaEnd?: string | null;
}

// Type for creating a new order
export interface CreateOrderParams {
  supplier: string;
  material: string;
  quantity: number;
  date_ordered: string;
  notes?: string;
  po_number: string;
  eta_start?: string;
  eta_end?: string;
}

export interface OrderPostResponse {
  success: boolean;
  order: Order;
}

// Component props type for rder widget component
export interface OrdersOverviewWidgetProps {
  orders: Array<{
    order_id: number;
    supplier: string;
    material: string;
    quantity: number;
    date_ordered: string;
    quantity_received: number;
    status: string;
    created_at: string;
    updated_at: string;
    po_number?: string;
  }>;
}
