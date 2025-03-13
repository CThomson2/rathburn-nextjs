import React from "react";
import { BottomFormType } from "../types";

interface BottomFormProps {
  formData: BottomFormType;
  onChange: (field: keyof BottomFormType, value: string | boolean) => void;
}

const BottomForm: React.FC<BottomFormProps> = ({ formData, onChange }) => {
  // Handler for input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    // If checkbox, use the checked property instead of value
    if (type === "checkbox") {
      onChange(name as keyof BottomFormType, checked);
    } else {
      onChange(name as keyof BottomFormType, value);
    }
  };

  return (
    <>
      {/* Section 1: Start, Loading, Completion Dates */}
      <div className="col-span-12 border border-gray-300 dark:border-gray-600">
        <div className="grid grid-cols-12">
          <div className="col-span-4 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
            Start Date
          </div>
          <div className="col-span-8 p-2 border-b border-gray-300 dark:border-gray-600">
            <input
              type="date"
              className="form-control w-full"
              value={formData.start_date || ""}
              name="start_date"
              onChange={handleInputChange}
              aria-label="Start Date"
            />
          </div>

          <div className="col-span-4 p-2 font-semibold border-r border-gray-300 dark:border-gray-600 border-t-0">
            Loading Date
          </div>
          <div className="col-span-8 p-2 border-b border-gray-300 dark:border-gray-600">
            <input
              type="date"
              className="form-control w-full"
              value={formData.loading_date || ""}
              name="loading_date"
              onChange={handleInputChange}
              aria-label="Loading Date"
            />
          </div>

          <div className="col-span-4 p-2 font-semibold border-r border-gray-300 dark:border-gray-600 border-t-0">
            Completion Date
          </div>
          <div className="col-span-8 p-2">
            <input
              type="date"
              className="form-control w-full"
              value={formData.completion_date || ""}
              name="completion_date"
              onChange={handleInputChange}
              aria-label="Completion Date"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Temperature and Procedures */}
      <div className="col-span-12 border border-gray-300 dark:border-gray-600">
        <div className="grid grid-cols-12">
          <div className="col-span-4 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
            Start Temp (°C)
          </div>
          <div className="col-span-8 p-2 border-b border-gray-300 dark:border-gray-600">
            <input
              type="number"
              className="form-control w-full"
              value={formData.start_temp || ""}
              name="start_temp"
              onChange={handleInputChange}
              aria-label="Start Temperature"
              placeholder="Temperature in °C"
            />
          </div>

          <div className="col-span-4 p-2 font-semibold border-r border-gray-300 dark:border-gray-600 border-t-0">
            Cleaning Required
          </div>
          <div className="col-span-8 p-2 border-b border-gray-300 dark:border-gray-600">
            <input
              type="checkbox"
              className="form-check-input"
              checked={formData.cleaning_req || false}
              name="cleaning_req"
              onChange={handleInputChange}
              aria-label="Cleaning Required"
            />
          </div>

          <div className="col-span-4 p-2 font-semibold border-r border-gray-300 dark:border-gray-600 border-t-0">
            Vented
          </div>
          <div className="col-span-8 p-2 border-b border-gray-300 dark:border-gray-600">
            <input
              type="checkbox"
              className="form-check-input"
              checked={formData.vented || false}
              name="vented"
              onChange={handleInputChange}
              aria-label="Vented"
            />
          </div>

          <div className="col-span-4 p-2 font-semibold border-r border-gray-300 dark:border-gray-600 border-t-0">
            SOP
          </div>
          <div className="col-span-8 p-2">
            <input
              type="checkbox"
              className="form-check-input"
              checked={formData.SOP || false}
              name="SOP"
              onChange={handleInputChange}
              aria-label="SOP"
            />
          </div>
        </div>
      </div>

      {/* Section 3: Operator and Second Check */}
      <div className="col-span-12 border border-gray-300 dark:border-gray-600">
        <div className="grid grid-cols-12">
          <div className="col-span-4 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
            Operator
          </div>
          <div className="col-span-8 p-2 border-b border-gray-300 dark:border-gray-600">
            <input
              type="text"
              className="form-control w-full"
              value={formData.operator || ""}
              name="operator"
              onChange={handleInputChange}
              aria-label="Operator Initials"
              placeholder="Operator Initials"
              maxLength={2}
            />
          </div>

          <div className="col-span-4 p-2 font-semibold border-r border-gray-300 dark:border-gray-600 border-t-0">
            Second Check
          </div>
          <div className="col-span-8 p-2">
            <input
              type="text"
              className="form-control w-full"
              value={formData.second_check || ""}
              name="second_check"
              onChange={handleInputChange}
              aria-label="Second Check Initials"
              placeholder="Second Check Initials"
              maxLength={2}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomForm;
