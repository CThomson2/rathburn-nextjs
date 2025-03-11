import { PrismaNewDrums } from "../base";
import { DrumStatus, DrumLocation } from "./constant";

// Base type from Prisma schema - this will update when schema changes
export type DrumBase = PrismaNewDrums;

// Extended type that includes related data from the orders table
export interface DrumBatch extends Omit<DrumBase, "order_id" | "location"> {
  status: DrumStatus.Type;
  order_id?: number;
  supplier?: string;
  date_ordered?: Date;
  location?: DrumLocation.Type;
}

// Type for the query parameters
export interface DrumQueryParams {
  page: number;
  limit: number;
  sortField?: keyof DrumBatch;
  sortOrder?: "asc" | "desc";
  status: DrumStatus.Type[];
}

// Type for the API response
export interface DrumsResponse {
  drums: DrumBatch[];
  total: number;
}

// Formatted type for client display
export interface FormattedDrum
  extends Omit<
    DrumBatch,
    "created_at" | "updated_at" | "date_processed" | "date_ordered"
  > {
  created_at: string;
  updated_at: string;
  date_processed?: string;
  date_ordered?: string;
}

// Props for the DrumStatusWidget component
export interface DrumWidgetProps {
  drums: {
    drum_id: number;
    material: string;
    date_processed?: string;
    status: DrumStatus.Type;
    created_at: string;
    updated_at: string;
    order_id?: number;
    location?: string;
  }[];
}
