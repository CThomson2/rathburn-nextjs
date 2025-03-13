import { useState, useEffect } from "react";
import { ScheduleType } from "../types";
import { getHistoricalSchedules } from "../api/historical-data";

interface UseHistoricalSchedulesProps {
  limit?: number;
}

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

export function useHistoricalSchedules({
  limit = 15,
}: UseHistoricalSchedulesProps = {}): UseHistoricalSchedulesReturn {
  const [schedules, setSchedules] = useState<ScheduleType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchHistoricalSchedules() {
      try {
        setIsLoading(true);
        setError(null);

        // In a real application, this would be an API call
        // Using mock data for now
        const mockSchedules = getHistoricalSchedules(limit);

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        setSchedules(mockSchedules);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setIsLoading(false);
      }
    }

    fetchHistoricalSchedules();
  }, [limit]);

  // Transform the schedules to the format expected by the HistoricalSchedules component
  const transformedSchedules = schedules.map((schedule) => ({
    id: schedule.schedule_id,
    name: schedule.schedule_name,
    date: schedule.date,
    site: schedule.site,
  }));

  return {
    schedules: transformedSchedules,
    isLoading,
    error,
  };
}
