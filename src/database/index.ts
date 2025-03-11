import { PrismaClient } from "/prisma/generated/client";

function createPrismaClient() {
  const databaseUrl =
    process.env.DATABASE_URL ||
    (process.env.NODE_ENV === "production"
      ? undefined
      : "postgresql://dummy:dummy@localhost:5432/dummy?schema=public");

  return new PrismaClient({
    log: ["query", "info", "warn", "error"],
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });
}

// In development, we want to use a single instance across hot reloads
// In production, we want to create a new instance for each request
export const prisma = global.prisma || createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

// Export a function to get the client that's safe for both static and dynamic contexts
export function getPrismaClient() {
  if (process.env.NODE_ENV === "production") {
    // In production, create a new client for each request
    return createPrismaClient();
  }
  // In development, reuse the global instance
  return prisma;
}

// Check if we're in a static context (build/SSG)
export function isStaticContext() {
  // This is a heuristic - if we're not in a browser and global.prisma is undefined,
  // we're probably in a static context like next build
  return (
    typeof window === "undefined" &&
    typeof global.prisma === "undefined" &&
    process.env.NODE_ENV === "production"
  );
}

// Export a helper for route configuration
export const DATABASE_ROUTE_CONFIG = {
  dynamic: "force-dynamic" as const,
  fetchCache: "force-no-store" as const,
};

/**
 * Type definition for a database operation callback function
 * This helps ensure proper type inference when using withDatabase
 */
export type DatabaseOperationCallback<T> = (db: PrismaClient) => Promise<T>;

/**
 * Executes a database operation with proper connection handling.
 * This ensures we're using the right PrismaClient instance and properly
 * handling connections in all environments.
 *
 * @template T - The type of the result returned by the database operation.
 * @param {DatabaseOperationCallback<T>} operation - A callback function that performs the database operation.
 *                               It receives a PrismaClient instance as an argument and returns a Promise of type T.
 * @returns {Promise<T>} - A Promise that resolves to the result of the database operation.
 * @throws {Error} - Throws an error if the database operation fails.
 *
 * @example
 * // Example usage:
 * const result = await withDatabase(async (db) => {
 *   return await db.user.findMany();
 * });
 */
export async function withDatabase<T>(
  operation: DatabaseOperationCallback<T>
): Promise<T> {
  // Get the PrismaClient instance, either a new one or a reused one depending on the environment
  const db = getPrismaClient();
  try {
    // Execute the provided operation with the PrismaClient instance
    return await operation(db);
  } catch (error) {
    console.error("Database operation failed:", error);
    throw error;
  }
}

/**
 * Gets a properly configured database client instance for direct use.
 *
 * This is a lightweight alternative to withDatabase when you want to manage
 * the client directly and handle errors yourself. Use this for simple operations
 * where the withDatabase wrapper feels excessive.
 *
 * @returns {PrismaClient} A properly configured Prisma client instance
 *
 * @example
 * // Example usage:
 * const db = getDb();
 * const product = await db.products.findUnique({ where: { id: 1 } });
 */
export function getDb(): PrismaClient {
  return getPrismaClient();
}

export default getPrismaClient;
