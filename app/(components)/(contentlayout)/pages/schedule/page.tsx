"use client";
import { useState } from "react";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import {
  ProductionSchedule,
  HistoricalSchedules,
  useProductionSchedule,
  useHistoricalSchedules,
} from "@/features/production";
import { Spinner } from "@/components/ui/spinner";

export default function SchedulePage() {
  // For a real app, you would get the scheduleId from the URL parameters
  const [selectedScheduleId, setSelectedScheduleId] = useState<
    number | undefined
  >(undefined);

  // Get production schedule data
  const {
    schedule,
    isLoading: isLoadingSchedule,
    error: scheduleError,
    downloadDistillationPdf,
    editDistillation,
  } = useProductionSchedule({ scheduleId: selectedScheduleId });

  // Get historical schedules for the sidebar
  const { schedules: historicalSchedules, isLoading: isLoadingHistorical } =
    useHistoricalSchedules();

  return (
    <>
      <Seo title={"Production Schedule"} />
      <Pageheader
        currentpage="Production Schedule"
        activepage="Manufacturing"
        mainpage="Production Schedule"
      />

      <div className="grid grid-cols-12 gap-6">
        {/* Main schedule section */}
        <div className="xl:col-span-9 col-span-12">
          {isLoadingSchedule ? (
            <div className="box h-[300px] flex items-center justify-center">
              <Spinner size="lg" />
              <span className="ml-2">Loading production schedule...</span>
            </div>
          ) : scheduleError ? (
            <div className="box p-6 text-center">
              <div className="text-red-500 mb-2">Error loading schedule</div>
              <p className="text-sm text-gray-500">{scheduleError.message}</p>
              <button
                className="mt-4 ti-btn ti-btn-primary"
                onClick={() => window.location.reload()}
              >
                Try Again
              </button>
            </div>
          ) : schedule ? (
            <ProductionSchedule
              schedule={schedule}
              onDownload={downloadDistillationPdf}
              onEdit={editDistillation}
            />
          ) : (
            <div className="box p-6 text-center">
              <p className="text-gray-500">No schedule data available.</p>
            </div>
          )}
        </div>

        {/* Sidebar with historical schedules */}
        <div className="xl:col-span-3 col-span-12">
          <HistoricalSchedules
            schedules={historicalSchedules}
            selectedScheduleId={selectedScheduleId}
            isLoading={isLoadingHistorical}
          />
        </div>
      </div>
    </>
  );
}
