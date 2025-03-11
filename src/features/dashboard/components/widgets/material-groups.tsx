import { BaseWidget } from "../base-widget";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useMaterialGroups } from "../../hooks/use-material-groups";

interface MaterialGroupsWidgetProps {
  id: string;
}

// Color palette for pie chart segments
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82CA9D",
  "#A4DE6C",
  "#D0ED57",
];

/**
 * MaterialGroupsWidget component fetches and displays material groups data.
 * It shows a pie chart and detailed information about each group.
 */
export function MaterialGroupsWidget({ id }: MaterialGroupsWidgetProps) {
  const { data, isLoading, error } = useMaterialGroups();

  if (isLoading) {
    return (
      <BaseWidget id={id} title="Material Groups" className="col-span-2">
        <Card className="h-[400px]">
          <CardContent>
            <div className="grid h-full grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <Skeleton className="h-[300px] w-full" />
              </div>
              <div>
                <Skeleton className="h-[300px] w-full" />
              </div>
            </div>
          </CardContent>
        </Card>
      </BaseWidget>
    );
  }

  if (error) {
    return (
      <BaseWidget id={id} title="Material Groups" className="col-span-2">
        <Card>
          <CardContent>
            <Alert variant="destructive">
              <AlertDescription>
                Failed to load material groups data
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </BaseWidget>
    );
  }

  if (!data || data.groups.length === 0) {
    return (
      <BaseWidget id={id} title="Material Groups" className="col-span-2">
        <Card>
          <CardContent>
            <Alert>
              <AlertDescription>
                No material groups data available.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </BaseWidget>
    );
  }

  return (
    <BaseWidget id={id} title="Material Groups" className="col-span-2">
      <Card className="h-[400px] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-primary/20">
        <CardContent>
          <div className="grid h-full grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data.groups}
                    dataKey="totalStock"
                    nameKey="chemicalGroup"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    innerRadius={60}
                    paddingAngle={2}
                    label={({
                      cx,
                      cy,
                      midAngle,
                      innerRadius,
                      outerRadius,
                      percentage,
                      chemicalGroup,
                    }) => {
                      const RADIAN = Math.PI / 180;
                      const radius =
                        innerRadius + (outerRadius - innerRadius) * 1.4;
                      const x = cx + radius * Math.cos(-midAngle * RADIAN);
                      const y = cy + radius * Math.sin(-midAngle * RADIAN);

                      return (
                        <text
                          x={x}
                          y={y}
                          fill="#888888"
                          textAnchor={x > cx ? "start" : "end"}
                          dominantBaseline="central"
                          className="text-xs font-medium"
                        >
                          {chemicalGroup} ({percentage}%)
                        </text>
                      );
                    }}
                  >
                    {data.groups.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        className="transition-all duration-300 hover:opacity-80"
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-popover p-3 border rounded-lg shadow-xl">
                            <p className="font-medium text-base text-popover-foreground">
                              {data.chemicalGroup}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {data.totalStock} drums ({data.percentage}%)
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {data.materialCount} materials
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              {data.groups.map((group, index) => (
                <div
                  key={group.chemicalGroup}
                  className="p-4 rounded-lg border bg-card/50 hover:bg-card/80 transition-all duration-300 mb-2 last:mb-0"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <h4 className="font-medium text-base">
                      {group.chemicalGroup}
                    </h4>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="font-medium text-foreground">
                      {group.totalStock} drums ({group.percentage}%)
                    </p>
                    <details className="group">
                      <summary className="cursor-pointer hover:text-foreground transition-colors">
                        View materials
                      </summary>
                      <ul className="mt-2 space-y-1.5 pl-4">
                        {group.materials
                          .sort((a, b) => b.stock - a.stock)
                          .map((material) => (
                            <li
                              key={material.id}
                              className="flex justify-between items-center hover:text-foreground transition-colors"
                            >
                              <span>{material.name}</span>
                              <span className="font-medium">
                                {material.stock}
                              </span>
                            </li>
                          ))}
                      </ul>
                    </details>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </BaseWidget>
  );
}
