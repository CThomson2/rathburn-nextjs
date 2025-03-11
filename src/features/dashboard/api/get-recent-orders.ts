import { clientApi as api } from "@/lib/api-client/client";
import { RecentOrdersResponse } from "../types/api";

export const getRecentOrders = (
  searchTerm?: string
): Promise<RecentOrdersResponse> => {
  const params = new URLSearchParams();
  // If a searchTerm is provided, append it as a query parameter 'q'
  if (searchTerm) {
    params.append("q", searchTerm);
  }
  return api.get(`/orders/recent?${params}`);
};
