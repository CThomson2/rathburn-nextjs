import { useState, useEffect } from "react";
import { ScheduleType } from "../types";
import { getHistoricalSchedules } from "../api/historical-data";

/**
 * Props for the useHistoricalSchedules hook
 * @interface UseHistoricalSchedulesProps
 * @property {number} [limit=15] - Maximum number of historical schedules to fetch
 */
interface UseHistoricalSchedulesProps {
  limit?: number;
}

/**
 * Return type for the useHistoricalSchedules hook
 * @interface UseHistoricalSchedulesReturn
 * @property {Array} schedules - Transformed schedule data ready for display
 * @property {boolean} isLoading - Indicates if data is currently being fetched
 * @property {Error|null} error - Error object if fetch operation failed, null otherwise
 */
interface UseHistoricalSchedulesReturn {
  schedules: {
    id: number;
    name: string;
    date: string;
    site: "NEW" | "OLD";
  }[];
  isLoading: boolean;
  error: Error | null;
}

/**
 * Custom hook to fetch and manage historical production schedules
 *
 * @param {UseHistoricalSchedulesProps} props - Configuration options
 * @param {number} [props.limit=15] - Maximum number of schedules to retrieve
 * @returns {UseHistoricalSchedulesReturn} Object containing schedules data, loading state, and errors
 *
 * @example
 * const { schedules, isLoading, error } = useHistoricalSchedules({ limit: 10 });
 */
export function useHistoricalSchedules({
  limit = 15,
}: UseHistoricalSchedulesProps = {}): UseHistoricalSchedulesReturn {
  // State to store the raw schedule data
  const [schedules, setSchedules] = useState<ScheduleType[]>([]);
  // Loading state indicator
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // Error state for handling fetch failures
  const [error, setError] = useState<Error | null>(null);

  // Effect to fetch historical schedules when the component mounts or limit changes
  useEffect(() => {
    /**
     * Asynchronous function to fetch historical schedule data
     * Handles loading states and error conditions
     */
    async function fetchHistoricalSchedules() {
      try {
        // Set loading state to true at the start of the fetch operation
        setIsLoading(true);
        // Reset any previous errors
        setError(null);

        // In a real application, this would be an API call
        // Using mock data for now
        const mockSchedules = getHistoricalSchedules(limit);

        // Simulate network delay for development testing
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Update state with the fetched schedules
        setSchedules(mockSchedules);
      } catch (err) {
        // Handle and normalize errors
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        // Always set loading to false when operation completes (success or failure)
        setIsLoading(false);
      }
    }

    // Execute the fetch function
    fetchHistoricalSchedules();
  }, [limit]); // Re-run effect when limit changes

  /**
   * Transform the raw schedule data into the format expected by UI components
   * Maps from the API/database schema to the component-friendly structure
   */
  const transformedSchedules = schedules.map((schedule) => ({
    id: schedule.schedule_id,
    name: schedule.schedule_name,
    date: schedule.date,
    site: schedule.site,
  }));

  // Return the processed data and state information
  return {
    schedules: transformedSchedules,
    isLoading,
    error,
  };
}
