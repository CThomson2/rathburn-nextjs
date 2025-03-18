import type { DrumStatus, DrumStatusData } from "../types";

/**
 * Transforms raw drum status counts into formatted dashboard data
 * Calculates total drums and percentages for each status
 */
export async function getDrumStatusData(): Promise<DrumStatusData> {
  try {
    // Fetch raw status counts from API
    const response = await fetch("/api/dashboards/inventory/drum-status", {
      // Add cache control for client-side updates
      cache: "no-store",
      // Add revalidation for server-side
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      throw new Error("Failed to fetch drum status data");
    }

    const rawStatusCounts: Record<DrumStatus, number> = await response.json();

    // Calculate total drums
    const total = Object.values(rawStatusCounts).reduce(
      (sum, count) => sum + count,
      0
    );

    // Initialize all possible statuses with zero counts
    const initialStatuses: DrumStatusData["statuses"] = {
      en_route: { count: 0, percentage: 0 },
      in_stock: { count: 0, percentage: 0 },
      pre_production: { count: 0, percentage: 0 },
      in_production: { count: 0, percentage: 0 },
      scheduled: { count: 0, percentage: 0 },
      processed: { count: 0, percentage: 0 },
      second_process: { count: 0, percentage: 0 },
      disposed: { count: 0, percentage: 0 },
      lost: { count: 0, percentage: 0 },
      unknown: { count: 0, percentage: 0 },
    };

    // Calculate counts and percentages for each status
    const statuses = Object.entries(rawStatusCounts).reduce(
      (acc, [status, count]) => {
        const drumStatus = status as DrumStatus;
        const percentage = total > 0 ? Math.round((count / total) * 100) : 0;

        acc[drumStatus] = {
          count,
          percentage,
        };

        return acc;
      },
      initialStatuses
    );

    return {
      total,
      statuses,
    };
  } catch (error) {
    console.error("Error fetching drum status data:", error);
    // Return zero-state data on error
    return {
      total: 0,
      statuses: {
        en_route: { count: 0, percentage: 0 },
        in_stock: { count: 0, percentage: 0 },
        pre_production: { count: 0, percentage: 0 },
        in_production: { count: 0, percentage: 0 },
        scheduled: { count: 0, percentage: 0 },
        processed: { count: 0, percentage: 0 },
        second_process: { count: 0, percentage: 0 },
        disposed: { count: 0, percentage: 0 },
        lost: { count: 0, percentage: 0 },
        unknown: { count: 0, percentage: 0 },
      },
    };
  }
}
