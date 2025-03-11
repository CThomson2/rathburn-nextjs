import { useState, useEffect } from "react";
import { BaseWidget } from "../base-widget";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/utils/cn";
import { useInventoryOverview } from "../../hooks/use-overview";

interface StockLevelsProps {
  id: string;
}

export function StockLevelsWidget({ id }: StockLevelsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    data: inventoryData,
    isLoading,
    error,
    status,
  } = useInventoryOverview();

  // Log every state change
  useEffect(() => {
    console.log("[Widget] Query status changed:", status);
    console.log("[Widget] Current state:", {
      status,
      isLoading,
      error,
      hasData: !!inventoryData,
      data: inventoryData,
    });
  }, [status, isLoading, error, inventoryData]);

  if (isLoading) {
    console.log("[Widget] Loading state");
    return (
      <BaseWidget id={id} title="Inventory Overview">
        <div className="h-[300px] flex items-center justify-center">
          <p className="text-muted-foreground">Loading inventory data...</p>
        </div>
      </BaseWidget>
    );
  }

  if (error) {
    console.error("[Widget] Error state:", error);
    return (
      <BaseWidget id={id} title="Inventory Overview">
        <div className="h-[300px] flex items-center justify-center">
          <p className="text-red-500">Failed to load inventory data</p>
        </div>
      </BaseWidget>
    );
  }

  if (!inventoryData) {
    console.log("[Widget] No data available");
    return (
      <BaseWidget id={id} title="Inventory Overview">
        <div className="h-[300px] flex items-center justify-center">
          <p className="text-muted-foreground">No inventory data available</p>
        </div>
      </BaseWidget>
    );
  }

  console.log("[Widget] Rendering with data:", {
    totalStock: inventoryData.totalStock,
    lowStockCount: inventoryData.lowStockCount,
    weeklyChanges: inventoryData.weeklyStockChanges,
  });

  const displayedMaterials = isExpanded
    ? inventoryData.topMaterials
    : inventoryData.topMaterials.slice(0, 5);

  return (
    <BaseWidget id={id} title="Inventory Overview">
      <div className="space-y-6">
        {/* Summary stats */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Total Stock</p>
            <p className="text-2xl font-semibold">{inventoryData.totalStock}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Low Stock Items</p>
            <p className="text-2xl font-semibold text-yellow-500">
              {inventoryData.lowStockCount}
            </p>
          </div>
        </div>

        {/* Weekly stock changes chart */}
        <div>
          <h4 className="text-sm font-medium mb-3">Weekly Stock Changes</h4>
          <div className="h-[300px] w-full border rounded-lg bg-card/50">
            {Array.isArray(inventoryData.weeklyStockChanges) &&
            inventoryData.weeklyStockChanges.length > 0 ? (
              <ResponsiveContainer width="100%" height={280}>
                <BarChart
                  data={inventoryData.weeklyStockChanges}
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                  <XAxis
                    dataKey="day"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    cursor={{ fill: "var(--accent)" }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-card p-2 border rounded-lg shadow-sm">
                            <p className="font-medium">{data.day}</p>
                            <p className="text-sm text-muted-foreground">
                              Net change: {data.netChange}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar
                    dataKey="netChange"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={50}
                  >
                    {inventoryData.weeklyStockChanges.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          entry.netChange > 0
                            ? "var(--primary)"
                            : entry.netChange < 0
                            ? "var(--destructive)"
                            : "var(--muted)"
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-muted-foreground">
                No stock changes data available
              </div>
            )}
          </div>
        </div>

        <Separator className="my-4" />

        {/* Top materials list */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium">Top Materials</h4>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
            >
              {isExpanded ? (
                <>
                  Show less
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show all
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
          <div
            className={cn(
              "space-y-2 transition-all",
              isExpanded ? "max-h-[500px]" : "max-h-[250px]"
            )}
          >
            {displayedMaterials.map((material, index) => (
              <div
                key={material.material}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 transition-colors"
              >
                <span className="text-sm">
                  {index + 1}. {material.material}
                </span>
                <span className="text-sm font-medium">{material.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BaseWidget>
  );
}
