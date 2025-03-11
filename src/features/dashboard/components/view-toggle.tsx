"use client";

import { Layout, Star } from "lucide-react";
import { useDashboard } from "@/context";
import { cn } from "@/utils/cn";

/**
 * ViewToggle component provides a segmented control for switching between 'all widgets' and 'favorites' views.
 * Uses the DashboardContext to manage view state and provides visual feedback for the active view.
 *
 * @component
 * @example
 * ```tsx
 *
 * <ViewToggle />
 * ```
 */
export function ViewToggle() {
  const { view, setView } = useDashboard();

  return (
    <div className="inline-flex rounded-lg border bg-card p-1">
      <button
        onClick={() => setView("all")}
        className={cn(
          "inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground cursor-pointer",
          view === "all" && "bg-accent text-accent-foreground"
        )}
      >
        <Layout className="mr-2 h-4 w-4" />
        All Widgets
      </button>
      <button
        onClick={() => setView("favorites")}
        className={cn(
          "inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground cursor-pointer",
          view === "favorites" && "bg-accent text-accent-foreground"
        )}
      >
        <Star className="mr-2 h-4 w-4" />
        Favorites
      </button>
    </div>
  );
}
