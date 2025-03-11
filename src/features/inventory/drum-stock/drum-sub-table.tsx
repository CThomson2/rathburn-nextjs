"use client";

import { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  FilterFn,
} from "@tanstack/react-table";
import { rankItem } from "@tanstack/match-sorter-utils";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Download, FileDown, Search } from "lucide-react";

import { type DrumRecord } from "./data-utils";
import { formatDateForTable } from "@/utils/format-date";

interface DrumSubTableProps {
  drums: DrumRecord[];
}

// Custom filter function to search across multiple fields
const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // If no value is provided, always include the row
  if (!value || value === "") return true;

  const searchValue = value.toLowerCase();

  // Search in status
  const status = String(row.getValue("status") || "").toLowerCase();
  if (status.includes(searchValue)) return true;

  // Search in location
  const location = String(row.getValue("location") || "").toLowerCase();
  if (location.includes(searchValue)) return true;

  // Search in drum ID
  const drumId = String(row.getValue("drum_id") || "").toLowerCase();
  if (drumId.includes(searchValue)) return true;

  return false;
};

export default function DrumSubTable({ drums }: DrumSubTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  // Simple columns for the subtable (material column removed as requested)
  const subColumns: ColumnDef<DrumRecord>[] = [
    {
      accessorKey: "drum_id",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 font-medium"
        >
          Drum ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: (info) => info.getValue<number>(),
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 font-medium"
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: (info) => {
        const status = info.getValue<string>();
        return (
          <span
            className={`px-2 py-1 rounded text-xs font-medium ${
              status === "available"
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                : status === "scheduled"
                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                : status === "processed"
                ? "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
                : status === "pending"
                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
            }`}
          >
            {status}
          </span>
        );
      },
    },
    {
      accessorKey: "location",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 font-medium"
        >
          Location
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: (info) => info.getValue<string | null>() || "-",
    },
    {
      accessorKey: "date_processed",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 font-medium"
        >
          Date Processed
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: (info) => {
        const date = info.getValue<Date | null>();
        return formatDateForTable(date);
      },
    },
    {
      id: "barcode",
      header: "Barcode",
      cell: ({ row }) => {
        const drumId = row.getValue("drum_id") as number;

        const handleDownloadBarcode = async () => {
          try {
            const res = await fetch(`/api/barcodes/single/${drumId}`);

            if (!res.ok) {
              throw new Error("Failed to generate barcode PDF");
            }

            const pdfBlob = await res.blob();
            const pdfUrl = window.URL.createObjectURL(pdfBlob);
            window.open(pdfUrl, "_blank");
          } catch (error) {
            console.error("Error downloading barcode:", error);
          }
        };

        return (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDownloadBarcode}
            className="p-1 hover:bg-slate-100 dark:hover:bg-boxdark"
          >
            <Download className="h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "created_at",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 font-medium"
        >
          Created
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: (info) => formatDateForTable(info.getValue<Date>()),
    },
  ];

  const table = useReactTable({
    data: drums,
    columns: subColumns,
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    globalFilterFn: fuzzyFilter,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="rounded-md border bg-gray-50 dark:bg-boxdark-2 p-2 transition-all duration-150">
      <div className="flex items-center justify-between py-2">
        <h3 className="text-sm font-medium">Drum Details</h3>
        <div className="flex gap-2 items-center">
          <Search className="h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search drums..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="max-w-sm text-sm h-8 bg-white dark:bg-boxdark"
          />
        </div>
      </div>

      <Table className="w-full">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className="bg-white dark:bg-boxdark border-t border-b"
            >
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="py-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className="hover:bg-gray-100 dark:hover:bg-boxdark border-b"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="font-normal text-sm py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={subColumns.length}
                className="h-24 text-center"
              >
                No results found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
