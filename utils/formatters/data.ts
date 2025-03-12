/**
 * Type utility functions for transforming database types to frontend-friendly formats
 */

/**
 * Checks if a value is a Date object
 */
function isDate(value: any): value is Date {
  return value instanceof Date && !isNaN(value.getTime());
}

/**
 * Converts Date objects to ISO strings for client-side consumption
 *
 * @param obj Object with Date properties
 * @param dateFields Array of field names that should be converted
 * @returns New object with dates converted to strings
 */
export function formatDates<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  dateFields: K[]
): {
  [P in keyof T]: P extends K
    ? T[P] extends Date
      ? string
      : T[P] extends Date | null
      ? string | null
      : T[P]
    : T[P];
} {
  const result = { ...obj } as any;

  dateFields.forEach((field) => {
    const value = obj[field];
    if (field in obj) {
      result[field] = isDate(value) ? value.toISOString() : value || null;
    }
  });

  return result;
}

/**
 * Converts `... | null` field types into `... | undefined` for front-end compatibility
 *
 * @param obj Object with any properties
 * @returns New objet with nullish fields converted into undefined
 */
export function toUndefined<T extends Record<string, any>>(
  obj: T
): {
  [P in keyof T]: T[P] extends infer U | null ? U | undefined : T[P];
} {
  const result: Partial<T> = { ...obj };

  for (const key in obj) {
    if (obj[key] === null) {
      result[key] = undefined;
    }
  }

  return result as T;
}

/**
 * Type for defining a mapper between database and frontend types
 */
export type TypeMapper<DbType, FrontendType> = (dbObj: DbType) => FrontendType;

/**
 * Creates a standard formatter function that formats dates and maps DB types to Frontend types
 * @param dataFields Array of field names to format as ISO strings
 * @returns Function that transforms an object's date fields
 */
export function createFormatter<T extends Record<string, any>, U = T>(
  dataFields: (keyof T)[]
): (obj: T) => U {
  return (obj: T) => toUndefined(formatDates(obj, dataFields)) as unknown as U;
}

/**
 * Utility to create a response formatter with pagination
 * @param formatter Function to format individual items
 * @returns Function that formats a paginated response
 */
export function createPaginatedFormatter<T, U>(
  formatter: (item: T) => U
): (response: { items: T[]; total: number }) => { items: U[]; total: number } {
  return ({ items, total }) => ({
    items: items.map(formatter),
    total,
  });
}
