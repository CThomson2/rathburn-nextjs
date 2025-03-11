// components/features/inventory/DrumsTable/columns.tsx
"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ColumnSort } from "@/components/table";
import { StatusFilter } from "@/components/table/columns/filter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, FileDown } from "lucide-react";
import { format } from "date-fns";
import type { DrumBatch } from "@/types/models";
import { DrumStatus } from "@/types/models/drums/constant";
import { OrderGroup } from "./data-utils";
import { formatDateForTable } from "@/utils/format-date";

// Add props for status filter state
interface ColumnProps {
  selectedStatuses: DrumStatus.Type[];
  setSelectedStatuses: React.Dispatch<React.SetStateAction<DrumStatus.Type[]>>;
}

export const DrumStockColumns: ColumnDef<OrderGroup>[] = [
  {
    accessorKey: "order_id",
    header: "PO Number",
    cell: (info) => <div>{info.getValue<number>()}</div>,
  },
  {
    accessorKey: "supplier",
    header: "Supplier",
    cell: (info) => <div>{info.getValue<string>()}</div>,
  },
  {
    accessorKey: "material",
    header: "Material",
    cell: (info) => <div>{info.getValue<string>()}</div>,
  },
  {
    accessorKey: "date_ordered",
    header: "Date Ordered",
    cell: (info) => {
      const date = info.getValue<Date | null>();
      return <div>{formatDateForTable(date)}</div>;
    },
  },
  {
    id: "barcode",
    header: () => (
      <div className="flex items-center gap-2 text-slate-300">
        Barcode <FileDown className="h-4 w-4" />
      </div>
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const orderId = row.getValue("order_id") as number;
      const drumId = row.getValue("drum_id") as number;
      const material = row.getValue("material") as string;
      const supplier = row.getValue("supplier") as string;

      if (status !== "pending") return null;

      console.log("### PRINTING BARCODE ###");
      console.log(`orderId: ${orderId}`);
      console.log(`drumId: ${drumId}`);
      console.log(`material: ${material}`);
      console.log(`supplier: ${supplier}`);

      const handleGeneratePDF = async () => {
        try {
          const res = await fetch(
            `/api/barcodes/generate/${orderId}?material=${encodeURIComponent(
              material
            )}&supplier=${encodeURIComponent(supplier)}`
          );

          if (!res.ok) {
            throw new Error("Failed to generate barcode PDF");
          }

          const pdfBlob = await res.blob();
          const pdfUrl = window.URL.createObjectURL(pdfBlob);
          window.open(pdfUrl, "_blank");
        } catch (error) {
          console.error("Error generating barcode PDF:", error);
        }
      };

      return (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleGeneratePDF}
          className="hover:bg-slate-700/50"
        >
          <Download className="h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "total_drums",
    header: "Drum Count",
    cell: (info) => (
      <Badge className="rounded-full bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 px-2 py-1">
        {info.getValue<number>()}
      </Badge>
    ),
  },
];

export const createColumns = ({
  selectedStatuses,
  setSelectedStatuses,
}: ColumnProps): ColumnDef<DrumBatch>[] => [
  {
    accessorKey: "drum_id",
    header: ({ column }) => <ColumnSort column={column} title="ID" />,
    cell: ({ row }) => (
      <div className="font-semibold text-base">{row.getValue("drum_id")}</div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "material",
    header: ({ column }) => <ColumnSort column={column} title="Material" />,
    cell: ({ row }) => (
      <div className="font-medium text-base">{row.getValue("material")}</div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "status",
    header: () => (
      <StatusFilter
        title="Status"
        selectedStatuses={selectedStatuses}
        setSelectedStatuses={setSelectedStatuses}
      />
    ),
    cell: ({ row }) => {
      const status = row.getValue<string>("status");
      return (
        <Badge
          variant={(() => {
            switch (status) {
              case "available":
                return "default"; // Changed from "success" to "default" to match the type
              case "scheduled":
                return "secondary";
              case "processed":
                return "outline";
              case "pending":
                return "default";
              case "wasted":
              case "lost":
                return "destructive";
              default:
                return "secondary";
            }
          })()}
          className="px-4 py-1 text-sm font-medium"
        >
          {status}
        </Badge>
      );
    },
    enableSorting: true,
  },
  {
    accessorKey: "location",
    header: ({ column }) => <ColumnSort column={column} title="Location" />,
    cell: ({ row }) => (
      <div className="font-medium text-base">{row.getValue("location")}</div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "date_ordered",
    header: ({ column }) => <ColumnSort column={column} title="Date Ordered" />,
    cell: ({ row }) => (
      <div className="font-medium text-base">
        {formatDateForTable(row.getValue("date_ordered"))}
      </div>
    ),
    enableSorting: true,
  },
  // TODO: Fix bug - no data is showing for date_processed for the "processed" status drums, even though the values are in the SQL. Check API Prisma logic.
  {
    accessorKey: "date_processed",
    header: ({ column }) => (
      <ColumnSort column={column} title="Date Processed" />
    ),
    cell: ({ row }) => {
      const date = row.getValue("date_processed") as string | null;
      return (
        <div className="font-medium text-base">
          {date ? format(new Date(date), "dd MMM yyyy") : "-"}
        </div>
      );
    },
    enableSorting: true,
  },
  {
    id: "barcode",
    header: () => (
      <div className="flex items-center gap-2 text-slate-300">
        Barcode <FileDown className="h-4 w-4" />
      </div>
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as DrumStatus.Type;
      const orderId = row.getValue("order_id") as number;
      const material = row.getValue("material") as string;
      const supplier = row.getValue("supplier") as string;

      if (status !== "pending") return null;

      const handleGeneratePDF = async () => {
        try {
          const res = await fetch(
            `/api/barcodes/generate/${orderId}?material=${encodeURIComponent(
              material
            )}&supplier=${encodeURIComponent(supplier)}`
          );

          if (!res.ok) {
            throw new Error("Failed to generate barcode PDF");
          }

          const pdfBlob = await res.blob();
          const pdfUrl = window.URL.createObjectURL(pdfBlob);
          window.open(pdfUrl, "_blank");
        } catch (error) {
          console.error("Error generating barcode PDF:", error);
        }
      };

      return (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleGeneratePDF}
          className="hover:bg-slate-700/50"
        >
          <Download className="h-4 w-4" />
        </Button>
      );
    },
  },
];
