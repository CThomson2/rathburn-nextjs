import React from "react";
import Link from "next/link";
import { CalendarIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

interface HistoricalSchedule {
  id: number;
  name: string;
  date: string;
  site: "NEW" | "OLD";
}

interface HistoricalSchedulesProps {
  schedules: HistoricalSchedule[];
  selectedScheduleId?: number;
  isLoading?: boolean;
}

const HistoricalSchedules: React.FC<HistoricalSchedulesProps> = ({
  schedules,
  selectedScheduleId,
  isLoading = false,
}) => {
  // Group schedules by month
  const groupedSchedules = schedules.reduce((acc, schedule) => {
    const date = new Date(schedule.date);
    const monthYear = `${date.toLocaleString("default", {
      month: "long",
    })} ${date.getFullYear()}`;

    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }

    acc[monthYear].push(schedule);
    return acc;
  }, {} as Record<string, HistoricalSchedule[]>);

  // Format date in a human-readable way
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
    });
  };

  return (
    <div className="box">
      <div className="box-header">
        <div className="box-title">Production History</div>
      </div>
      <div className="box-body p-0">
        {isLoading ? (
          <div className="p-4 text-center">
            <div className="animate-spin inline-block w-6 h-6 border-2 border-primary border-t-transparent rounded-full"></div>
            <p className="mt-2 text-sm text-gray-500">Loading schedules...</p>
          </div>
        ) : schedules.length === 0 ? (
          <div className="p-4 text-center">
            <p className="text-gray-500">No historical schedules found.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {Object.entries(groupedSchedules).map(
              ([monthYear, monthSchedules]) => (
                <div key={monthYear} className="py-2">
                  <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800 font-medium text-sm flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    {monthYear}
                  </div>
                  <ul className="divide-y divide-gray-100 dark:divide-gray-700">
                    {monthSchedules.map((schedule) => (
                      <li key={schedule.id}>
                        <Link
                          href={`/production/schedules/${schedule.id}`}
                          className={`block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 ${
                            selectedScheduleId === schedule.id
                              ? "bg-primary/10 text-primary"
                              : ""
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <DocumentTextIcon className="w-5 h-5 text-gray-400" />
                              <div>
                                <p className="text-sm font-medium truncate max-w-[150px]">
                                  {schedule.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {formatDate(schedule.date)}
                                </p>
                              </div>
                            </div>
                            <span
                              className={`badge text-xs ${
                                schedule.site === "NEW"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {schedule.site}
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        )}
      </div>
      <div className="box-footer">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            {schedules.length} historical records
          </div>
          <Link
            href="/production/schedules/archive"
            className="text-sm text-primary hover:underline"
          >
            View all archives
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HistoricalSchedules;
