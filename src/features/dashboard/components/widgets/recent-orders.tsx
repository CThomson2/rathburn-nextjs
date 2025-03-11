"use client";

import { useState, useMemo } from "react";
import { BaseWidget } from "../base-widget";
import { Search } from "lucide-react";
import { useRecentOrders } from "../../hooks/use-recent-orders";
import debounce from "lodash/debounce";
import { RecentOrdersTable } from "@/components/shared/orders/recent-orders-table";
import type { OrderGridItem } from "@/types/models";
import type { Order as FeatureOrder } from "../../types/api";

interface RecentOrdersWidgetProps {
  id: string;
}

/**
 * Maps the feature-specific Order type to the OrderGridItem type
 * This is a simpler representation that works with the table component
 */
function mapToOrderGridItem(order: FeatureOrder): OrderGridItem {
  return {
    order_id: parseInt(order.order_id),
    supplier: order.supplier,
    material: order.material,
    quantity: order.quantity,
    quantity_received: order.quantity_received,
    status: order.status,
    date_ordered: order.date_ordered,
    po_number: order.po_number,
  };
}

/**
 * Widget that displays a list of recent orders with their status
 *
 * Features:
 * - Shows supplier name and order ID
 * - Color-coded status badges
 * - Order quantity and date
 * - Responsive layout that works on all screen sizes
 */
export function RecentOrdersWidget({ id }: RecentOrdersWidgetProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // Debounced search term to avoid too many API calls
  const debouncedSearchTerm = useMemo(
    () => debounce((term: string) => setSearchTerm(term), 300),
    []
  );

  const { data, isLoading, error } = useRecentOrders(searchTerm);

  // Map feature-specific orders to grid items
  const mappedOrders = useMemo(() => {
    if (!data?.orders) return [];
    return data.orders.map(mapToOrderGridItem);
  }, [data?.orders]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    debouncedSearchTerm(value);
  };

  return (
    <BaseWidget id={id} title="Recent Orders">
      <div className="space-y-4">
        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search by supplier or material..."
            onChange={handleSearch}
            className="w-full rounded-md border border-input pl-8 pr-2 py-2 text-sm 
              bg-background ring-offset-background placeholder:text-muted-foreground 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        {isLoading ? (
          <div className="text-center py-4 text-muted-foreground">
            Loading...
          </div>
        ) : error ? (
          <div className="text-center py-4 text-red-500">
            Failed to load orders
          </div>
        ) : (
          <div className="rounded-md border">
            <RecentOrdersTable
              orders={mappedOrders as any}
              emptyMessage="No orders match your search criteria"
            />
          </div>
        )}
      </div>
    </BaseWidget>
  );
}
