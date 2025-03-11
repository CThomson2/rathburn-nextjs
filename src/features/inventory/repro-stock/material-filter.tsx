"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Filter, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface MaterialFilterProps {
  materialOptions: string[];
  selectedMaterials: string[];
  setSelectedMaterials: React.Dispatch<React.SetStateAction<string[]>>;
}

export function MaterialFilter({
  materialOptions,
  selectedMaterials,
  setSelectedMaterials,
}: MaterialFilterProps) {
  const toggleMaterial = (material: string) => {
    if (selectedMaterials.includes(material)) {
      setSelectedMaterials((prev) => prev.filter((m) => m !== material));
    } else {
      setSelectedMaterials((prev) => [...prev, material]);
    }
  };

  const clearFilter = () => {
    setSelectedMaterials([]);
  };

  const selectAll = () => {
    setSelectedMaterials([...materialOptions]);
  };

  return (
    <div className="flex items-center">
      <span className="mr-2">Material</span>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className={`h-8 border-dashed relative bg-white dark:bg-boxdark-2 ${
              selectedMaterials.length > 0
                ? "border-primary"
                : "border-gray-300 dark:border-gray-600"
            }`}
          >
            <Filter className="h-3.5 w-3.5 mr-2" />
            <span>Filter</span>
            {selectedMaterials.length > 0 && (
              <span className="ml-2 rounded-full bg-primary text-white w-5 h-5 flex items-center justify-center text-xs">
                {selectedMaterials.length}
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-52 p-0 bg-white dark:bg-boxdark-2 border border-gray-200 dark:border-gray-700 shadow-lg"
          align="start"
        >
          <div className="p-2 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-sm">Filter by Material</h4>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-gray-600 dark:text-gray-300"
                onClick={clearFilter}
              >
                <X className="h-3.5 w-3.5 mr-1" />
                <span>Reset</span>
              </Button>
            </div>
            <div className="flex items-center mt-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full h-8 text-xs justify-start bg-white dark:bg-boxdark-2"
                onClick={selectAll}
              >
                <Check className="h-3.5 w-3.5 mr-2" />
                <span>Select All</span>
              </Button>
            </div>
          </div>
          <div className="py-2 max-h-60 overflow-auto">
            {materialOptions.map((material) => (
              <div
                key={material}
                className="px-2 py-1 flex items-center hover:bg-gray-100 dark:hover:bg-boxdark cursor-pointer"
                onClick={() => toggleMaterial(material)}
              >
                <div
                  className={`mr-2 h-4 w-4 rounded border flex items-center justify-center ${
                    selectedMaterials.includes(material)
                      ? "bg-primary border-primary text-white"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                >
                  {selectedMaterials.includes(material) && (
                    <Check className="h-3 w-3" />
                  )}
                </div>
                <span className="text-sm truncate">{material}</span>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
