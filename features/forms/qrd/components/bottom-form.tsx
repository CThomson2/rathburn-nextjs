import React from "react";

interface BottomFormProps {
  formData: {
    operator: string;
    secondCheck: string;
    startDate: string;
    completionDate: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BottomForm: React.FC<BottomFormProps> = ({
  formData,
  onChange,
}) => {
  return (
    <>
      {/* Equipment Cleaning */}
      <div className="col-span-12 border border-gray-300 dark:border-gray-600">
        <div className="grid grid-cols-12 border-b border-gray-300 dark:border-gray-600">
          <div className="col-span-12 p-2 font-semibold">
            Equipment Cleaning: Tick Box or Comments
          </div>
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-2 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
            None Req
          </div>
          <div className="col-span-4 p-2 border-r border-gray-300 dark:border-gray-600">
            <input
              type="checkbox"
              className="form-check-input"
              aria-label="None Required"
              id="noneReq"
            />
            <label htmlFor="noneReq" className="sr-only">
              None Required
            </label>
          </div>
          <div className="col-span-3 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
            Start Time
          </div>
          <div className="col-span-3 p-2">
            <input
              type="time"
              className="form-control"
              aria-label="Start Time"
              id="startTime"
            />
            <label htmlFor="startTime" className="sr-only">
              Start Time
            </label>
          </div>
        </div>

        <div className="grid grid-cols-12 border-t border-gray-300 dark:border-gray-600">
          <div className="col-span-2 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
            Vented
          </div>
          <div className="col-span-4 p-2 border-r border-gray-300 dark:border-gray-600">
            <input
              type="checkbox"
              className="form-check-input"
              aria-label="Vented"
              id="vented"
            />
            <label htmlFor="vented" className="sr-only">
              Vented
            </label>
          </div>
          <div className="col-span-3 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
            End Time
          </div>
          <div className="col-span-3 p-2">
            <input
              type="time"
              className="form-control"
              aria-label="End Time"
              id="endTime"
            />
            <label htmlFor="endTime" className="sr-only">
              End Time
            </label>
          </div>
        </div>

        <div className="grid grid-cols-12 border-t border-gray-300 dark:border-gray-600">
          <div className="col-span-2 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
            SOP
          </div>
          <div className="col-span-4 p-2 border-r border-gray-300 dark:border-gray-600">
            <input
              type="checkbox"
              className="form-check-input"
              aria-label="SOP"
              id="sop"
            />
            <label htmlFor="sop" className="sr-only">
              SOP
            </label>
          </div>
          <div className="col-span-3 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
            Start Temp °C
          </div>
          <div className="col-span-3 p-2">
            <input
              type="text"
              className="form-control"
              aria-label="Start Temperature"
              placeholder="Temperature"
              id="startTemp"
            />
            <label htmlFor="startTemp" className="sr-only">
              Start Temperature
            </label>
          </div>
        </div>

        <div className="grid grid-cols-12 border-t border-gray-300 dark:border-gray-600">
          <div className="col-span-2 p-2 border-r border-gray-300 dark:border-gray-600"></div>
          <div className="col-span-4 p-2 border-r border-gray-300 dark:border-gray-600"></div>
          <div className="col-span-3 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
            Fill Date
          </div>
          <div className="col-span-3 p-2">
            <input
              type="date"
              className="form-control"
              aria-label="Fill Date"
              id="fillDate"
            />
            <label htmlFor="fillDate" className="sr-only">
              Fill Date
            </label>
          </div>
        </div>

        <div className="grid grid-cols-12 border-t border-gray-300 dark:border-gray-600">
          <div className="col-span-2 p-2 font-semibold border-r border-gray-300 dark:border-gray-600 text-center">
            *Operator
          </div>
          <div className="col-span-4 p-2 border-r border-gray-300 dark:border-gray-600">
            <input
              type="text"
              className="form-control"
              aria-label="Operator Name"
              placeholder="Operator Name"
              id="operator"
              name="operator"
              value={formData.operator}
              onChange={onChange}
            />
            <label htmlFor="operator" className="sr-only">
              Operator
            </label>
          </div>
          <div className="col-span-3 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
            Start Date
          </div>
          <div className="col-span-3 p-2">
            <input
              type="date"
              className="form-control"
              aria-label="Start Date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={onChange}
            />
            <label htmlFor="startDate" className="sr-only">
              Start Date
            </label>
          </div>
        </div>

        <div className="grid grid-cols-12 border-t border-gray-300 dark:border-gray-600">
          <div className="col-span-2 p-2 font-semibold border-r border-gray-300 dark:border-gray-600 text-center">
            *2nd Check
          </div>
          <div className="col-span-4 p-2 border-r border-gray-300 dark:border-gray-600">
            <input
              type="text"
              className="form-control"
              aria-label="Second Check Name"
              placeholder="2nd Check Name"
              id="secondCheck"
              name="secondCheck"
              value={formData.secondCheck}
              onChange={onChange}
            />
            <label htmlFor="secondCheck" className="sr-only">
              Second Check
            </label>
          </div>
          <div className="col-span-3 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
            Completion Date
          </div>
          <div className="col-span-3 p-2">
            <input
              type="date"
              className="form-control"
              aria-label="Completion Date"
              id="completionDate"
              name="completionDate"
              value={formData.completionDate}
              onChange={onChange}
            />
            <label htmlFor="completionDate" className="sr-only">
              Completion Date
            </label>
          </div>
        </div>
      </div>

      {/* Final Confirmation */}
      <div className="col-span-12 border border-gray-300 dark:border-gray-600 p-3 text-center font-semibold">
        *I can confirm that the product and processing information contained
        above is correct
      </div>
    </>
  );
};
