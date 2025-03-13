"use client";

/**
 * Client API Client
 *
 * API client implementation for client components.
 * Includes client-specific functionality like toast notifications.
 */

import { useNotifications } from "@/components/ui/notifications";
import { ApiClient, RequestOptions, buildUrlWithParams } from "./base";

// Client-side fetch implementation
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

  // Use relative URL in browser
  const baseUrl = "/api";
  let fullUrl = buildUrlWithParams(`${baseUrl}${url}`, params);

  // Replace any double slashes with a single slash
  fullUrl = fullUrl.replace(/([^:]\/)\/+/g, "$1");

  const response = await fetch(fullUrl, {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers,
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

    // Use client-side notification system
    useNotifications.getState().addNotification({
      type: "error",
      title: "Error",
      message,
    });

    throw new Error(message);
  }

  return response.json();
}

// Client API object with methods for different HTTP requests
export const clientApi: ApiClient = {
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
    const baseUrl = "/api";
    let fullUrl = buildUrlWithParams(`${baseUrl}${url}`, options?.params);
    fullUrl = fullUrl.replace(/([^:]\/)\/+/g, "$1");
    return fullUrl;
  },
};
