import React from "react";
import { BatchFormType } from "../types";
import { PlusCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

interface BatchFormProps {
  batchSections: BatchFormType[];
  totalLiters: string;
  onChange: (
    sectionIndex: number,
    field: keyof BatchFormType,
    value: string
  ) => void;
  onTotalLitersChange: (value: string) => void;
  onAddSection: () => void;
  onRemoveSection: (index: number) => void;
}

// This component represents a single batch section
const BatchSection = ({
  sectionIndex,
  formData,
  onChange,
  onRemove,
  showRemoveButton,
}: {
  sectionIndex: number;
  formData: BatchFormType;
  onChange: (
    sectionIndex: number,
    field: keyof BatchFormType,
    value: string
  ) => void;
  onRemove: () => void;
  showRemoveButton: boolean;
}) => {
  // Handler for input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    onChange(sectionIndex, name as keyof BatchFormType, value);

    // If we're updating labels_count or labels_destroyed, recalculate labels_remaining
    if (name === "label_count" || name === "labels_destroyed") {
      const labelCount =
        name === "label_count"
          ? parseInt(value) || 0
          : parseInt(formData.label_count.toString()) || 0;
      const labelsDestroyed =
        name === "labels_destroyed"
          ? parseInt(value) || 0
          : parseInt(formData.labels_destroyed.toString()) || 0;

      const remaining = Math.max(0, labelCount - labelsDestroyed);
      onChange(sectionIndex, "labels_remaining", remaining.toString());
    }
  };

  return (
    <div className="col-span-12 border border-gray-300 dark:border-gray-600 relative">
      {showRemoveButton && (
        <button
          type="button"
          onClick={onRemove}
          className="absolute -top-3 -right-3 bg-white dark:bg-gray-800 text-red-500 rounded-full"
          title="Remove section"
        >
          <XCircleIcon className="h-6 w-6" />
        </button>
      )}

      <div className="grid grid-cols-12 border-b border-gray-300 dark:border-gray-600">
        <div className="col-span-3 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
          Grade
        </div>
        <div className="col-span-3 p-2 border-r border-gray-300 dark:border-gray-600">
          <select
            className="form-control w-full"
            value={formData.grade || ""}
            name="grade"
            onChange={handleInputChange}
            aria-label="Grade"
            title="Select grade"
          >
            <option value="">Select Grade</option>
            <option value="GD">GD</option>
            <option value="HPLC">HPLC</option>
            <option value="LCMS">LCMS</option>
            <option value="PTS-DS">PTS-DS</option>
            <option value="HPLC S">HPLC S</option>
          </select>
        </div>
        <div className="col-span-3 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
          Container Size (L)
        </div>
        <div className="col-span-3 p-2">
          <input
            type="number"
            className="form-control w-full"
            value={formData.container_size || ""}
            aria-label="Container Size"
            placeholder="Container Size (L)"
            name="container_size"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 border-b border-gray-300 dark:border-gray-600">
        <div className="col-span-3 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
          Container Qty
        </div>
        <div className="col-span-3 p-2 border-r border-gray-300 dark:border-gray-600">
          <input
            type="number"
            className="form-control w-full"
            value={formData.container_qty || ""}
            aria-label="Container Quantity"
            placeholder="Container Qty"
            name="container_qty"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-span-3 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
          Batch Code
        </div>
        <div className="col-span-3 p-2">
          <input
            type="text"
            className="form-control w-full"
            value={formData.batch_code || ""}
            aria-label="Batch Code"
            placeholder="Batch Code"
            name="batch_code"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 border-b border-gray-300 dark:border-gray-600">
        <div className="col-span-3 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
          PO Number
        </div>
        <div className="col-span-9 p-2">
          <input
            type="text"
            className="form-control w-full"
            value={formData.po_number || ""}
            aria-label="PO Number"
            placeholder="PO Number or Stock Type"
            name="po_number"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-3 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
          Label Count
        </div>
        <div className="col-span-3 p-2 border-r border-gray-300 dark:border-gray-600">
          <input
            type="number"
            className="form-control w-full"
            value={formData.label_count || ""}
            aria-label="Label Count"
            placeholder="Label Count"
            name="label_count"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-span-3 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
          Labels Destroyed
        </div>
        <div className="col-span-3 p-2">
          <input
            type="number"
            className="form-control w-full"
            value={formData.labels_destroyed || ""}
            aria-label="Labels Destroyed"
            placeholder="Labels Destroyed"
            name="labels_destroyed"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 border-t border-gray-300 dark:border-gray-600">
        <div className="col-span-3 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
          Labels Remaining
        </div>
        <div className="col-span-9 p-2">
          <input
            type="number"
            className="form-control w-full"
            value={formData.labels_remaining || ""}
            aria-label="Labels Remaining"
            placeholder="Labels Remaining"
            name="labels_remaining"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

const BatchForm: React.FC<BatchFormProps> = ({
  batchSections,
  totalLiters,
  onChange,
  onTotalLitersChange,
  onAddSection,
  onRemoveSection,
}) => {
  const maxSections = 4;
  const canAddMore = batchSections.length < maxSections;

  return (
    <>
      {batchSections.map((section, index) => (
        <BatchSection
          key={index}
          sectionIndex={index}
          formData={section}
          onChange={onChange}
          onRemove={() => onRemoveSection(index)}
          showRemoveButton={index > 0} // Only show remove button for additional sections
        />
      ))}

      {/* Add button for new batch sections */}
      {canAddMore && (
        <div className="col-span-12 flex justify-center my-2">
          <button
            type="button"
            onClick={onAddSection}
            className="flex items-center justify-center p-2 bg-green-500 hover:bg-green-600 text-white rounded-full"
            title="Add new batch section"
          >
            <PlusCircleIcon className="h-6 w-6" />
          </button>
        </div>
      )}

      {/* Total Liters Produced Section */}
      <div className="col-span-12 border border-gray-300 dark:border-gray-600 p-4">
        <div className="flex items-center justify-between">
          <label htmlFor="totalLiters" className="font-semibold text-lg">
            Total Lts. Produced
          </label>
          <input
            id="totalLiters"
            type="number"
            className="form-control w-64 ml-4"
            value={totalLiters || ""}
            aria-label="Total Liters Produced"
            placeholder="Total Liters"
            name="totalLiters"
            onChange={(e) => onTotalLitersChange(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default BatchForm;
