/**
 * Generic CRUD interfaces for database models
 * These interfaces provide a consistent pattern for database operations
 */

/**
 * Base CRUD interface for any model
 * @template T - The model type
 * @template C - The create params type
 * @template U - The updatable fields type
 * @template Q - The query params type
 * @template R - The query response type
 */
export interface BaseCRUD<
  T,
  C,
  U extends keyof T,
  Q,
  R = { items: T[]; total: number }
> {
  /**
   * Create a new record
   */
  create: (data: C) => Promise<T>;

  /**
   * Update specific fields of a record
   * Uses Partial to allow updating only some fields
   */
  update: (id: number, data: Partial<Pick<T, U>>) => Promise<T>;

  /**
   * Delete a record by ID
   */
  delete: (id: number) => Promise<void>;

  /**
   * Get a record by ID
   */
  get: (id: number) => Promise<T>;

  /**
   * Get records with optional filtering and pagination
   */
  getAll: (params: Q) => Promise<R>;
}

/**
 * Helper type to create a CRUD interface with sensible defaults
 * @template T - The model type
 * @template C - The create params type (defaults to Omit<T, 'id'>)
 * @template U - The updatable fields type
 * @template Q - The query params type
 * @template R - The query response type
 */
export type ModelCRUD<
  T,
  C = Omit<T, "id">,
  U extends keyof T = keyof Omit<T, "id" | "created_at" | "updated_at">,
  Q = { page: number; limit: number },
  R = { items: T[]; total: number }
> = BaseCRUD<T, C, U, Q, R>;

/**
 * Type for bulk operations
 */
export interface BulkOperations<T, C, U extends keyof T> {
  /**
   * Create multiple records in a single operation
   */
  bulkCreate: (data: C[]) => Promise<T[]>;

  /**
   * Update multiple records in a single operation
   */
  bulkUpdate: (ids: number[], data: Partial<Pick<T, U>>) => Promise<T[]>;

  /**
   * Delete multiple records in a single operation
   */
  bulkDelete: (ids: number[]) => Promise<void>;
}

/**
 * Extended CRUD interface with bulk operations
 */
export type ExtendedCRUD<
  T,
  C,
  U extends keyof T,
  Q,
  R = { items: T[]; total: number }
> = BaseCRUD<T, C, U, Q, R> & BulkOperations<T, C, U>;
