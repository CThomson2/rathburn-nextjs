import { Prisma } from "/prisma/generated/client";
import { Decimal } from "@prisma/client/runtime/library";

// Base type directly from Prisma schema
export type ProductBase = Prisma.productsGetPayload<{}>;

// Extended type for products with prices
export interface ProductWithPrices extends ProductBase {
  product_prices: {
    bottle_sizes: {
      id: number;
      volume: string;
    };
    product_id: number;
    bottle_size_id: number;
    price: Decimal;
  }[];
}

// Simple product row for tables
export interface ProductTableRow extends ProductBase {
  cas_number: string;
}

// Response type for product queries
export interface ProductsResponse {
  products: ProductWithPrices[];
  total: number;
}

// Formatted type for client-side display
export interface FormattedProduct
  extends Omit<ProductBase, "created_at" | "updated_at"> {
  created_at?: string | null;
  updated_at?: string | null;
}

// UI component props
export interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductWithPrices | null;
}

export interface FilterOption {
  label: string;
  value: string;
}

// Query parameters for product listing
export interface ProductQueryParams {
  page: number;
  limit: number;
  sortField?: keyof ProductBase;
  sortOrder?: "asc" | "desc";
  search?: string;
}
