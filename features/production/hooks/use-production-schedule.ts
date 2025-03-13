import { useState, useEffect, useCallback } from "react";
import { ScheduleType } from "../types";
import {
  getMockScheduleData,
  generateDistillationPDF,
} from "../api/schedule-service";

// In a real application, this would use proper data fetching with React Query or SWR

interface UseProductionScheduleProps {
  scheduleId?: number;
  useMockData?: boolean;
}

interface UseProductionScheduleReturn {
  schedule: ScheduleType | null;
  isLoading: boolean;
  error: Error | null;
  downloadDistillationPdf: (distillationId: number) => Promise<string | null>;
  editDistillation: (distillationId: number) => void;
}

export function useProductionSchedule({
  scheduleId,
  useMockData = true,
}: UseProductionScheduleProps = {}): UseProductionScheduleReturn {
  const [schedule, setSchedule] = useState<ScheduleType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchSchedule() {
      try {
        setIsLoading(true);
        setError(null);

        if (useMockData) {
          // Use mock data for development
          const mockData = getMockScheduleData();

          // Simulate network delay
          await new Promise((resolve) => setTimeout(resolve, 800));

          setSchedule(mockData);
        } else {
          // This would fetch from a real API
          if (!scheduleId) {
            throw new Error("Schedule ID is required");
          }

          const response = await fetch(
            `/api/production/schedules/${scheduleId}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch schedule");
          }

          const data = await response.json();
          setSchedule(data);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setIsLoading(false);
      }
    }

    fetchSchedule();
  }, [scheduleId, useMockData]);

  // Handle downloading a PDF for a distillation
  const downloadDistillationPdf = useCallback(
    async (distillationId: number): Promise<string | null> => {
      if (!schedule) return null;

      try {
        // Generate PDF for the distillation
        const pdfUrl = await generateDistillationPDF(
          schedule.schedule_id,
          distillationId
        );

        if (pdfUrl) {
          // Trigger the download
          const link = document.createElement("a");
          link.href = pdfUrl;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.click();
        }

        return pdfUrl;
      } catch (err) {
        console.error("Error downloading PDF:", err);
        return null;
      }
    },
    [schedule]
  );

  // Handle editing a distillation
  const editDistillation = useCallback((distillationId: number) => {
    // In a real app, this would navigate to an edit page or open a modal
    console.log(`Edit distillation with ID: ${distillationId}`);
    alert(
      `Edit functionality would open for distillation ID: ${distillationId}`
    );
  }, []);

  return {
    schedule,
    isLoading,
    error,
    downloadDistillationPdf,
    editDistillation,
  };
}
