/**
 * Server API Client
 *
 * API client implementation for server components and server actions.
 * Uses proper imports of server-only modules.
 */

import { cookies } from "next/headers";
import { ApiClient, RequestOptions, buildUrlWithParams } from "./base";

// Server-side only marker to prevent accidental client-side imports
import "server-only";

// Function to get server-side cookies
function getServerCookies(): string {
  try {
    const cookieStore = cookies();
    return cookieStore
      .getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join("; ");
  } catch (error) {
    console.error("Failed to access cookies:", error);
    return "";
  }
}

// Server-side fetch implementation
async function fetchApi<T>(
  url: string,
  options: RequestOptions = {}
): Promise<T> {
  const {
    method = "GET",
    headers = {},
    body,
    params,
    cache = "no-store",
    next,
  } = options;

  // Get cookies from the server request
  const cookieHeader = getServerCookies();

  // Use the environment variable for API URL
  const baseUrl = process.env.API_URL || "http://localhost:3000/api";
  let fullUrl = buildUrlWithParams(`${baseUrl}${url}`, params);

  // Replace any double slashes with a single slash
  fullUrl = fullUrl.replace(/([^:]\/)\/+/g, "$1");

  const response = await fetch(fullUrl, {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers,
      ...(cookieHeader ? { Cookie: cookieHeader } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
    credentials: "include",
    cache,
    next,
  });

  if (!response.ok) {
    const errorData = await response
      .json()
      .catch(() => ({ message: response.statusText }));
    const message = errorData.message || response.statusText;
    throw new Error(message);
  }

  return response.json();
}

// Server API client implementation
export const serverApi: ApiClient = {
  get<T>(url: string, options?: RequestOptions): Promise<T> {
    return fetchApi<T>(url, { ...options, method: "GET" });
  },
  post<T>(url: string, body?: any, options?: RequestOptions): Promise<T> {
    return fetchApi<T>(url, { ...options, method: "POST", body });
  },
  put<T>(url: string, body?: any, options?: RequestOptions): Promise<T> {
    return fetchApi<T>(url, { ...options, method: "PUT", body });
  },
  patch<T>(url: string, body?: any, options?: RequestOptions): Promise<T> {
    return fetchApi<T>(url, { ...options, method: "PATCH", body });
  },
  delete<T>(url: string, options?: RequestOptions): Promise<T> {
    return fetchApi<T>(url, { ...options, method: "DELETE" });
  },
  getUrl(url: string, options?: RequestOptions): string {
    const baseUrl = process.env.API_URL || "http://localhost:3000/api";
    let fullUrl = buildUrlWithParams(`${baseUrl}${url}`, options?.params);
    fullUrl = fullUrl.replace(/([^:]\/)\/+/g, "$1");
    return fullUrl;
  },
};
