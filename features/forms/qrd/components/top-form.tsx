import React, { useState } from "react";
import { TopFormType } from "../types";
import { PlusCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

interface TopFormProps {
  formData: {
    topSections: TopFormType[];
  };
  onChange: (
    sectionIndex: number,
    field: keyof TopFormType,
    value: string
  ) => void;
  onAddSection: () => void;
  onRemoveSection: (index: number) => void;
}

// This component represents a single Production Record section
const ProductionRecordSection = ({
  sectionIndex,
  formData,
  onChange,
  onRemove,
  showRemoveButton,
}: {
  sectionIndex: number;
  formData: TopFormType;
  onChange: (
    sectionIndex: number,
    field: keyof TopFormType,
    value: string
  ) => void;
  onRemove: () => void;
  showRemoveButton: boolean;
}) => {
  // Handler for input changes that formats and validates based on field type
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let processedValue = value;

    // Special handling for initials (transporter, loader, operator)
    if (name === "transporter" || name === "loader" || name === "operator") {
      processedValue = value.toUpperCase().slice(0, 2);
    }

    onChange(sectionIndex, name as keyof TopFormType, processedValue);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange(sectionIndex, name as keyof TopFormType, value);
  };

  const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD

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

      {/* Top row: PRODUCTION RECORD, Still, MFR */}
      <div className="grid grid-cols-12 border-b border-gray-300 dark:border-gray-600">
        <div className="col-span-4 p-2 border-r border-gray-300 dark:border-gray-600">
          <div className="font-semibold mb-1">Still Code</div>
          <select
            className="form-control w-full"
            value={formData.still_code || ""}
            name="still_code"
            onChange={handleInputChange}
            aria-label="Still Code"
            title="Select still code"
          >
            <option value="">Select Still</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>
        <div className="col-span-8 p-2">
          <div className="font-semibold mb-1">Manufacturer</div>
          <input
            type="text"
            className="form-control w-full"
            value={formData.manufacturer || ""}
            aria-label="Manufacturer"
            placeholder="Univar"
            name="manufacturer"
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Second row: Material, DRUM#, Date */}
      <div className="grid grid-cols-12 border-b border-gray-300 dark:border-gray-600">
        <div className="col-span-4 p-2 border-r border-gray-300 dark:border-gray-600">
          <div className="font-semibold mb-1">Material</div>
          <input
            type="text"
            className="form-control w-full"
            value={formData.material || ""}
            aria-label="Material"
            placeholder="Methanol"
            name="material"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-span-4 p-2 border-r border-gray-300 dark:border-gray-600">
          <div className="font-semibold mb-1">DRUM ID</div>
          <input
            type="number"
            className="form-control w-full"
            value={`${formData.drum_id || ""}`}
            aria-label="Drum Number"
            placeholder="XXXXX"
            name="drum_id"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-span-4 p-2">
          <div className="font-semibold mb-1">Date</div>
          <input
            type="date"
            className="form-control w-full"
            value={formData.date || today}
            min={today}
            name="date"
            onChange={handleInputChange}
            aria-label="Date"
            title="Production date"
          />
        </div>
      </div>

      {/* Third row: Transport, Loader, Operator */}
      <div className="grid grid-cols-12">
        <div className="col-span-4 p-2 border-r border-gray-300 dark:border-gray-600">
          <div className="font-semibold mb-1">*TRANSPORT</div>
          <input
            type="text"
            className="form-control w-full"
            value={formData.transporter || ""}
            placeholder="Initials"
            name="transporter"
            maxLength={2}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-span-4 p-2 border-r border-gray-300 dark:border-gray-600">
          <div className="font-semibold mb-1">*LOADER</div>
          <input
            type="text"
            className="form-control w-full"
            value={formData.loader || ""}
            placeholder="Initials"
            name="loader"
            maxLength={2}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-span-4 p-2">
          <div className="font-semibold mb-1">*OPERATOR/2nd CHECK</div>
          <input
            type="text"
            className="form-control w-full"
            value={formData.operator || ""}
            placeholder="Initials"
            name="operator"
            maxLength={2}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export const TopForm: React.FC<TopFormProps> = ({
  formData,
  onChange,
  onAddSection,
  onRemoveSection,
}) => {
  const maxSections = 3;
  const canAddMore = formData.topSections.length < maxSections;

  return (
    <>
      {formData.topSections.map((section, index) => (
        <ProductionRecordSection
          key={index}
          sectionIndex={index}
          formData={section}
          onChange={onChange}
          onRemove={() => onRemoveSection(index)}
          showRemoveButton={index > 0} // Only show remove button for additional sections
        />
      ))}

      {/* Add button for new sections */}
      {canAddMore && (
        <div className="col-span-12 flex justify-center my-2">
          <button
            type="button"
            onClick={onAddSection}
            className="flex items-center justify-center p-2 bg-green-500 hover:bg-green-600 text-white rounded-full"
            title="Add new section"
          >
            <PlusCircleIcon className="h-6 w-6" />
          </button>
        </div>
      )}

      {/* Confirmation Section */}
      <div className="col-span-12 border border-gray-300 dark:border-gray-600 p-3 text-center font-semibold">
        <strong>
          I CAN CONFIRM THAT THE INFORMATION CONTAINED ABOVE IS CORRECT
        </strong>
      </div>
    </>
  );
};

export default TopForm;
