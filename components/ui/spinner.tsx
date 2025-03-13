import React from "react";
import { cn } from "@/utils";

type SpinnerSize = "sm" | "md" | "lg" | "xl";

interface SpinnerProps {
  size?: SpinnerSize;
  className?: string;
}

const sizeMap: Record<SpinnerSize, string> = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12",
};

export const Spinner: React.FC<SpinnerProps> = ({ size = "md", className }) => {
  return (
    <div
      className={cn(
        "animate-spin inline-block border-2 border-current border-t-transparent rounded-full text-primary",
        sizeMap[size],
        className
      )}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
