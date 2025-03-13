/**
 * Base API Client
 *
 * Common types and utilities used by both server and client API implementations.
 */

export interface RequestOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
  cookie?: string;
  params?: Record<string, string | number | boolean | undefined | null>;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
}

export interface ApiClient {
  get<T>(url: string, options?: RequestOptions): Promise<T>;
  post<T>(url: string, body?: any, options?: RequestOptions): Promise<T>;
  put<T>(url: string, body?: any, options?: RequestOptions): Promise<T>;
  patch<T>(url: string, body?: any, options?: RequestOptions): Promise<T>;
  delete<T>(url: string, options?: RequestOptions): Promise<T>;
  getUrl(url: string, options?: RequestOptions): string;
}

export function buildUrlWithParams(
  url: string,
  params?: RequestOptions["params"]
): string {
  if (!params) {
    return url;
  }
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null
    )
  );
  if (Object.keys(filteredParams).length === 0) {
    return url;
  }
  const queryString = new URLSearchParams(
    filteredParams as Record<string, string>
  ).toString();
  return `${url}?${queryString}`;
}
