import * as t from ".";

/**
 * Fields that are permitted to be updated in the materials table
 */
export type UpdateFields = keyof Pick<
  t.MaterialBase,
  | "name"
  | "cas_number"
  | "chemical_group"
  | "description"
  | "un_code"
  | "flash_point"
>;

/**
 * Type-safe CRUD interface for Materials
 */
export interface MaterialCRUD {
  /**
   * Create a new material
   */
  create: (data: t.MaterialPostParams) => Promise<t.Material>;

  /**
   * Update specific fields of a material
   * Uses Partial to allow updating only some fields
   */
  update: (
    id: number,
    data: Partial<Pick<t.MaterialBase, UpdateFields>>
  ) => Promise<t.Material>;

  /**
   * Delete a material by ID
   */
  delete: (id: number) => Promise<void>;

  /**
   * Get a material by ID
   */
  get: (id: number) => Promise<t.Material>;

  /**
   * Get materials with optional filtering and pagination
   */
  getAll: (params: t.MaterialQueryParams) => Promise<t.MaterialsResponse>;
}
