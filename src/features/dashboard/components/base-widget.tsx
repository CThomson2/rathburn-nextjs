"use client";

import { Star } from "lucide-react";
import { cn } from "@/utils/cn";
import { useDashboard } from "@/context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

/**
 * Props for the BaseWidget component.
 * @property {string} id - Unique identifier for the widget.
 * @property {string} title - Title of the widget.
 * @property {string} [className] - Optional additional class names for styling.
 * @property {React.ReactNode} children - Child components or elements to be rendered inside the widget.
 */
interface BaseWidgetProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * BaseWidget component provides a styled container with a title and optional favorite toggle functionality.
 *
 * @param {BaseWidgetProps} props - The properties for the BaseWidget component.
 * @returns {JSX.Element} The rendered BaseWidget component.
 */
export function BaseWidget({
  id,
  title,
  children,
  className,
}: BaseWidgetProps): JSX.Element {
  const { toggleFavorite, isFavorited } = useDashboard();
  const favorited = isFavorited(id);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn("group relative", isDragging ? "z-50" : "z-0", className)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background to-background rounded-2xl transition-all duration-300 group-hover:opacity-75" />
      <Card
        className={cn(
          // Base Styles & Theme Classes
          "relative overflow-hidden backdrop-blur-sm bg-card/95 dark:bg-card/90",
          "border border-border/50",
          "shadow-[0_8px_16px_rgb(0_0_0/0.08)] dark:shadow-[0_8px_16px_rgb(0_0_0/0.25)]",
          "transition-all duration-300",
          // Hover Effects
          "hover:shadow-[0_12px_24px_rgb(0_0_0/0.12)] dark:hover:shadow-[0_12px_24px_rgb(0_0_0/0.35)]",
          "hover:border-primary/20 dark:hover:border-primary/20",
          // Transition
          "hover:-translate-y-1",
          isDragging && "shadow-2xl scale-105"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 dark:from-primary/10 dark:to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <CardHeader className="relative">
          <CardTitle className="text-lg font-semibold tracking-tight">
            {title}
          </CardTitle>
          <div className="absolute top-2 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="h-1.5 w-1.5 rounded-full bg-primary/50 dark:bg-primary/70" />
          </div>
        </CardHeader>
        <div className="p-4 pt-0">{children}</div>
      </Card>
    </div>
  );
}
