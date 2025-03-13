"use client";

/**
 * API Client - Compatibility Layer
 *
 * This file maintains backward compatibility with existing code.
 * It re-exports the appropriate client-side API client.
 *
 * For new code, please use the new modular API client directly:
 * - Client components: import { clientApi as api } from '@/lib/api-client';
 * - Server components: import { serverApi } from '@/lib/api-client/server';
 */
import { clientApi } from "./api-client/client";

import type { RequestOptions } from "./api-client/base";
import { buildUrlWithParams } from "./api-client/base";

// Re-export the client API as the default API
export const api = clientApi;

// Re-export the types and utilities
export type { RequestOptions };
export { buildUrlWithParams };

// Re-export the getServerCookies function for backward compatibility
// Note: This is a stub that returns an empty string on the client
export async function getServerCookies(): Promise<string> {
  console.warn(
    "getServerCookies() called from a client component. " +
      "This is a compatibility stub and will return an empty string. " +
      'For server components, import { serverApi } from "@/lib/api-client/server" instead.'
  );
  return Promise.resolve("");
}
