import { ChemicalGroup } from "./constant";
import { Prisma } from "/prisma/generated/client";

// Base type directly from Prisma schema
export type MaterialBase = Prisma.raw_materialsGetPayload<{}>;

// Extended material type with additional fields
export interface Material extends MaterialBase {
  // Add any application-specific fields that don't exist in the database
  chemical_group_name?: string;
}

// Query parameters for material listing
export interface MaterialQueryParams {
  page: number;
  limit: number;
  sortField?: keyof MaterialBase;
  sortOrder?: "asc" | "desc";
  chemicalGroup?: ChemicalGroup.Type[];
}

// Response type for material queries
export interface MaterialsResponse {
  materials: Material[];
  total: number;
}

// Formatted type for client-side display
export interface FormattedMaterial
  extends Omit<Material, "created_at" | "updated_at"> {
  created_at?: string | null;
  updated_at?: string | null;
}

// Type for a material with UNCode validation
export type UNDigits = `${number}${number}${number}${number}`;
export type UNCode = `UN${UNDigits}` | `un${UNDigits}` | `Un${UNDigits}`;

// Types for API operations
export type MaterialPostParams = Omit<Material, "id">;
export type MaterialUpdateParams = Partial<Material>;
export type MaterialDeleteParams = Pick<Material, "id">; // Development only

export type MaterialGetGroupParams = {
  group: ChemicalGroup.Type;
};

export type MaterialGetGroupResponse = {
  groups: ChemicalGroup.Type[];
  count: number;
};
