import { useQuery } from "@tanstack/react-query";
import { InventoryOverview } from "../types/api";
import { getStockLevels, getWeeklyStockChanges } from "../api/get-stock-levels";

export function useInventoryOverview() {
  return useQuery<InventoryOverview>({
    queryKey: ["inventoryOverview"],
    queryFn: async () => {
      console.log("[Hook] Starting data fetch...");

      try {
        // First get the weekly changes
        console.log("[Hook] Fetching weekly changes...");
        const weeklyStockChanges = await getWeeklyStockChanges();
        console.log("[Hook] Weekly changes received:", weeklyStockChanges);

        // Then get the stock levels
        console.log("[Hook] Fetching stock levels...");

        // Try a direct fetch as a fallback if the API client is failing
        let stockLevels;
        try {
          stockLevels = await getStockLevels({
            lowCount: 25,
            highCount: 10,
          });
        } catch (e) {
          console.error(
            "[Hook] Primary fetch method failed, trying direct fetch:",
            e
          );

          // Direct fetch as fallback
          const directResponse = await fetch(
            "/api/dashboard/current-stock?lowCount=25&highCount=10"
          );
          if (!directResponse.ok) {
            throw new Error(
              `Direct fetch failed: ${directResponse.status} ${directResponse.statusText}`
            );
          }
          stockLevels = await directResponse.json();
        }

        console.log("[Hook] Stock levels received:", stockLevels);

        if (!stockLevels || !weeklyStockChanges) {
          console.error("[Hook] Missing required data:", {
            hasStockLevels: !!stockLevels,
            hasWeeklyChanges: !!weeklyStockChanges,
          });
          throw new Error("Failed to fetch required data");
        }

        const result: InventoryOverview = {
          ...stockLevels,
          weeklyStockChanges,
        };

        console.log("[Hook] Returning combined result:", result);
        return result;
      } catch (error) {
        console.error("[Hook] Error in data fetch:", error);
        throw error;
      }
    },
    staleTime: 30000, // Consider data fresh for 30 seconds
    retry: 2, // Retry failed requests twice
  });
}
