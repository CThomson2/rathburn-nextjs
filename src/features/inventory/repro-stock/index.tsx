"use client";

import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  ColumnDef,
  ColumnFiltersState,
} from "@tanstack/react-table";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  ChevronFirst,
  ChevronLast,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { ReproStock } from "../types";
import { MaterialFilter } from "./material-filter";
import { createColumns } from "./columns";

interface ReproStockTableProps {
  data: ReproStock[];
}

export function ReproStockTable({ data }: ReproStockTableProps) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  // Extract unique material values for the filter
  const materialOptions = Array.from(
    new Set(data.map((item) => item.material))
  );
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

  // Define columns with material filter
  const columns = React.useMemo(
    () =>
      createColumns({
        materialOptions,
        selectedMaterials,
        setSelectedMaterials,
      }),
    [materialOptions, selectedMaterials, setSelectedMaterials]
  );

  // Filter data by selected materials
  const filteredData = React.useMemo(() => {
    return selectedMaterials.length > 0
      ? data.filter((item) => selectedMaterials.includes(item.material))
      : data;
  }, [data, selectedMaterials]);

  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      columnFilters,
      globalFilter,
      pagination,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const { pageSize, pageIndex } = table.getState().pagination;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center pb-4">
        <div className="relative flex items-center flex-1 md:max-w-md">
          <Input
            placeholder="Search all columns..."
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="pr-10 bg-gray-50 dark:bg-boxdark-2 border-gray-300 dark:border-gray-600"
          />
          <div className="absolute right-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center">
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-boxdark-2 text-sm"
          >
            {[10, 25, 50, 100].map((pgSize) => (
              <option key={pgSize} value={pgSize}>
                Show {pgSize}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <Table className="min-w-full">
          <TableHeader className="bg-gray-50 dark:bg-boxdark-2">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="px-6 py-3 text-left text-sm font-semibold"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="bg-white dark:bg-boxdark hover:bg-gray-50 dark:hover:bg-boxdark-2 border-b border-gray-200 dark:border-gray-700 transition-colors"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="px-6 py-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="px-6 py-10 text-center text-gray-500 dark:text-gray-400"
                >
                  No results found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Showing {pageIndex * pageSize + 1} to{" "}
          {Math.min(
            (pageIndex + 1) * pageSize,
            table.getFilteredRowModel().rows.length
          )}{" "}
          of {table.getFilteredRowModel().rows.length} entries
        </div>

        <div className="flex gap-1">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            className="h-8 w-8 p-0 bg-gray-50 dark:bg-boxdark-2"
          >
            <ChevronFirst className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="h-8 w-8 p-0 bg-gray-50 dark:bg-boxdark-2"
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-1">
            {Array.from({ length: table.getPageCount() }, (_, i) => (
              <Button
                key={i}
                variant={i === pageIndex ? "default" : "outline"}
                size="sm"
                onClick={() => table.setPageIndex(i)}
                className={`h-8 w-8 p-0 ${
                  i === pageIndex ? "" : "bg-gray-50 dark:bg-boxdark-2"
                }`}
              >
                {i + 1}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="h-8 w-8 p-0 bg-gray-50 dark:bg-boxdark-2"
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            className="h-8 w-8 p-0 bg-gray-50 dark:bg-boxdark-2"
          >
            <ChevronLast className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
