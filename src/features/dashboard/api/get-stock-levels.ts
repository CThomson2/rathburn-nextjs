import { clientApi as api } from "@/lib/api-client/client";
import { DailyChange, StockLevels } from "../types/api";

interface WeeklyStockChangesResponse {
  weeklyStockChanges: DailyChange[];
}

interface StockLevelsResponse extends StockLevels {}

export const getStockLevels = async ({
  lowCount,
  highCount,
}: {
  lowCount: number;
  highCount: number;
}): Promise<StockLevels> => {
  console.log("[API Client] Starting stock levels request with params:", {
    lowCount,
    highCount,
  });

  try {
    // Log the full URL that will be requested
    const fullUrl =
      typeof window !== "undefined"
        ? `/api/dashboard/current-stock?lowCount=${lowCount}&highCount=${highCount}`
        : `${process.env.NEXT_PUBLIC_API_URL}/dashboard/current-stock?lowCount=${lowCount}&highCount=${highCount}`;

    console.log("[API Client] Will request URL:", fullUrl);

    const response = await api.get<StockLevelsResponse>(
      "/dashboard/current-stock",
      {
        params: {
          lowCount,
          highCount,
        },
      }
    );
    console.log("[API Client] Stock levels response:", response);
    return response;
  } catch (error) {
    console.error("[API Client] Error fetching stock levels:", error);
    // Log more details about the error
    if (error instanceof Error) {
      console.error("[API Client] Error name:", error.name);
      console.error("[API Client] Error message:", error.message);
      console.error("[API Client] Error stack:", error.stack);
    }
    throw error;
  }
};

export const getWeeklyStockChanges = async (): Promise<DailyChange[]> => {
  try {
    const response = await api.get<WeeklyStockChangesResponse>(
      "/dashboard/stock-changes"
    );
    console.log("[API Client] Weekly changes raw response:", response);

    if (!response?.weeklyStockChanges) {
      console.error("[API Client] Invalid response format:", response);
      throw new Error("Invalid response format - missing weeklyStockChanges");
    }

    return response.weeklyStockChanges;
  } catch (error) {
    console.error("[API Client] Error fetching weekly changes:", error);
    throw error;
  }
};
