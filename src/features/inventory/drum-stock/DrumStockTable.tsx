"use client";

import React, { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
  SortingState,
  ExpandedState,
  Row,
} from "@tanstack/react-table";

// UI components
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  ChevronDown,
  ChevronRight,
  ChevronFirst,
  ChevronLast,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Sub-table component
import DrumSubTable from "./drum-sub-table";

// Importing types
import { type OrderGroup, type DrumRecord } from "./data-utils";

export function DrumStockTable({ data }: DrumStockTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  // Clear expanded state when page changes
  useEffect(() => {
    setExpanded({});
  }, [pagination.pageIndex]);

  // Rename column headers to match the UI mockup
  const columns: ColumnDef<OrderGroup>[] = [
    // Expander column
    {
      id: "expander",
      header: "",
      cell: ({ row }) => {
        return (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              row.toggleExpanded();
            }}
            className="p-0 h-6 w-6"
          >
            {row.getIsExpanded() ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        );
      },
    },
    {
      accessorKey: "order_id",
      header: "PO Number",
      cell: (info) => (
        <div className={info.row.getIsExpanded() ? "font-bold" : ""}>
          {info.getValue<number>()}
        </div>
      ),
    },
    {
      accessorKey: "supplier",
      header: "Supplier",
      cell: (info) => (
        <div className={info.row.getIsExpanded() ? "font-bold" : ""}>
          {info.getValue<string>()}
        </div>
      ),
    },
    {
      accessorKey: "material",
      header: "Material",
      cell: (info) => (
        <div className={info.row.getIsExpanded() ? "font-bold" : ""}>
          {info.getValue<string>()}
        </div>
      ),
    },
    {
      accessorKey: "date_ordered",
      header: "Date Ordered",
      cell: (info) => {
        const date = info.getValue<Date | null>();
        return (
          <div className={info.row.getIsExpanded() ? "font-bold" : ""}>
            {date ? date.toLocaleDateString() : "-"}
          </div>
        );
      },
    },
    {
      accessorKey: "total_drums",
      header: "Drum Count",
      cell: (info) => (
        <Badge
          variant="secondary"
          className="rounded-full bg-blue-100 text-blue-800 px-2 py-1"
        >
          {info.getValue<number>()}
        </Badge>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      expanded,
      pagination,
    },
    onSortingChange: setSorting,
    onExpandedChange: setExpanded,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  // Expand only the parent rows
  const handleExpandAll = () => {
    const newExpanded: Record<string, boolean> = {};

    // Only expand the top-level rows
    table.getRowModel().rows.forEach((row) => {
      // Only expand the row if it's a parent row with subRows
      if (row.original.subRows && row.original.subRows.length > 0) {
        newExpanded[row.id] = true;
      }
    });

    setExpanded(newExpanded);
  };

  const handleCollapseAll = () => {
    setExpanded({});
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleExpandAll}>
            Expand All
          </Button>
          <Button variant="outline" size="sm" onClick={handleCollapseAll}>
            Collapse All
          </Button>
        </div>

        {/* Pagination Controls - Moved to top */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronFirst className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>

          <span className="text-sm mx-2">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </span>

          <Button
            variant="outline"
            size="icon"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <ChevronLast className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="bg-white">
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
            {table.getRowModel().rows.map((row) => (
              <React.Fragment key={row.id}>
                {/* Parent row */}
                <TableRow className="border-t hover:bg-gray-50">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>

                {/* Expanded content - only if the row is expanded and has subRows */}
                {row.getIsExpanded() && row.original.subRows?.length > 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="p-0 bg-white border-none"
                    >
                      <div className="mx-2 my-2">
                        <DrumSubTable drums={row.original.subRows} />
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Page information */}
      <div className="flex justify-end text-sm text-gray-500">
        Showing{" "}
        {data.length === 0 ? 0 : pagination.pageIndex * pagination.pageSize + 1}{" "}
        to{" "}
        {Math.min(
          (pagination.pageIndex + 1) * pagination.pageSize,
          data.length
        )}{" "}
        of {data.length} results
      </div>
    </div>
  );
}

interface DrumStockTableProps {
  data: OrderGroup[];
}
