/**
 * API Client Index
 *
 * This file exports the appropriate API client based on the context (server or client).
 * It also re-exports types from the base module.
 */

// Re-export types from base
export type { RequestOptions, ApiClient } from "./base";
export { buildUrlWithParams } from "./base";

// Note: We don't conditionally import here because Next.js would include both
// in the bundle. Instead, consumers should explicitly import from the
// appropriate module.

// Export both APIs with their specific names
export { clientApi } from "./client";
export { serverApi } from "./server";

/**
 * USAGE GUIDE:
 *
 * In client components:
 * ```
 * 'use client';
 * import { clientApi as api } from '@/lib/api-client';
 *
 * // Use clientApi for API calls
 * ```
 *
 * In server components:
 * ```
 * import { serverApi } from '@/lib/api-client/server';
 *
 * // Use serverApi for API calls
 * ```
 */
