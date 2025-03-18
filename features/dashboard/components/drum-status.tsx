"use client";

import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { getDrumStatusData } from "../api/get-drum-status";
import type { DrumStatusData } from "../types";
/**
 * Drum Status Widget component for dashboard
 * Shows the distribution and count of drums separated by their inventory status
 * Updates dynamically on change in drum status throughout operation
 * Drum status mainly changes when barcode labels are scanned
 *
 * This widget - along with all others - uses Shadcn UI components and Tailwind CSS for styling
 */

// interface DrumStatusData {
//   total: number;
//   percentChange: number;
//   compareText: string;
//   statuses: {
//     en_route: { count: number; percentage: number };
//     in_stock: { count: number; percentage: number };
//     pre_production: { count: number; percentage: number };
//     in_production: { count: number; percentage: number };
//     scheduled: { count: number; percentage: number };
//     processed: { count: number; percentage: number };
//     second_process: { count: number; percentage: number };
//     disposed: { count: number; percentage: number };
//     lost: { count: number; percentage: number };
//     unknown: { count: number; percentage: number };
//   };
// }

// Example static data - will be replaced with actual data from props
// const defaultData: DrumStatusData = {
//   total: 4289,
//   percentChange: 1.02,
//   compareText: "compared to last week",
//   statuses: {
//     en_route: { count: 987, percentage: 21 },
//     in_stock: { count: 1073, percentage: 26 },
//     pre_production: { count: 1674, percentage: 35 },
//     in_production: { count: 921, percentage: 18 },
//     scheduled: { count: 921, percentage: 18 },
//     processed: { count: 921, percentage: 18 },
//     second_process: { count: 921, percentage: 18 },
//     disposed: { count: 921, percentage: 18 },
//     lost: { count: 921, percentage: 18 },
//     unknown: { count: 921, percentage: 18 },
//   },
// };

interface DrumStatusWidgetProps {
  initialData: DrumStatusData;
}

const DrumStatusWidget = ({ initialData }: DrumStatusWidgetProps) => {
  // Use React Query to handle client-side updates
  const { data, isLoading } = useQuery({
    queryKey: ["drumStatus"],
    queryFn: getDrumStatusData,
    initialData,
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="col-span-12 xl:col-span-6 xxl:col-span-12">
      <Card className="border shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between px-6 py-4 space-y-0">
          <CardTitle className="text-base font-medium">Drum Status</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center text-[0.75rem] text-[#8c9097] dark:text-white/50 font-normal">
                View All
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="py-2 text-[0.8125rem] font-medium">
                Today
              </DropdownMenuItem>
              <DropdownMenuItem className="py-2 text-[0.8125rem] font-medium">
                This Week
              </DropdownMenuItem>
              <DropdownMenuItem className="py-2 text-[0.8125rem] font-medium">
                Last Week
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="px-6 py-4">
          <div className="flex items-center mb-[0.8rem]">
            <h4 className="font-bold mb-0 text-[1.5rem]">{data.total}</h4>
            {/* <div className="ms-2">
              <Badge
                variant="outline"
                className={`py-[0.18rem] px-[0.45rem] rounded-sm text-success font-medium text-[0.75em] bg-success/10 border-0`}
              >
                {data.percentChange}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 ml-1 inline-block"
                >
                  <path d="M12 19V5l-8 8 8-8 8 8-8-8v14z" />
                </svg>
              </Badge>
              <span className="text-[#8c9097] dark:text-white/50 text-[0.813rem] ms-1">
                {data.compareText}
              </span>
            </div> */}
          </div>

          <div className="flex w-full h-[0.3125rem] mb-6 rounded-full overflow-hidden">
            <div className="flex w-full gap-0">
              <div
                /* eslint-disable-next-line react/no-inline-styles */
                className={cn("bg-primary h-full rounded-s-[0.625rem]")}
                style={{ width: `${data.statuses.en_route.percentage}%` }}
              ></div>
              <div
                className={cn("bg-info h-full")}
                /* eslint-disable-next-line react/no-inline-styles */
                style={{ width: `${data.statuses.in_stock.percentage}%` }}
              ></div>
              <div
                className={cn("bg-warning h-full")}
                /* eslint-disable-next-line react/no-inline-styles */
                style={{ width: `${data.statuses.processed.percentage}%` }}
              ></div>
              <div
                className={cn("bg-success h-full rounded-e-[0.625rem]")}
                /* eslint-disable-next-line react/no-inline-styles */
                style={{
                  width: `${
                    data.statuses.pre_production.percentage +
                    data.statuses.scheduled.percentage
                  }%`,
                }}
              ></div>
            </div>
          </div>

          <ul className="list-none mb-0 pt-2 space-y-3">
            <li>
              <div className="flex items-center text-[0.813rem] justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>En Route</span>
                </div>
                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
                  {data.statuses.en_route.count} drums
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center text-[0.813rem] justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-info mr-2"></div>
                  <span>In Stock</span>
                </div>
                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
                  {data.statuses.in_stock.count} drums
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center text-[0.813rem] justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-warning mr-2"></div>
                  <span>Processed</span>
                </div>
                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
                  {data.statuses.processed.count} drums
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center text-[0.813rem] justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-success mr-2"></div>
                  <span>Scheduled for Production</span>
                </div>
                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
                  {data.statuses.pre_production.count +
                    data.statuses.scheduled.count}{" "}
                  drums
                </div>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default DrumStatusWidget;
