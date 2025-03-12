import React from "react";

interface BatchFormProps {
  totalLiters: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Reusable Container Section component
const ContainerSection = () => {
  return (
    <div className="col-span-12 border border-gray-300 dark:border-gray-600">
      <div className="grid grid-cols-12 border-b border-gray-300 dark:border-gray-600">
        <div className="col-span-4 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
          Container Size
        </div>
        <div className="col-span-4 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
          No of Containers
        </div>
        <div className="col-span-4 p-2 font-semibold">Batch No</div>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-3 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
          Grade
        </div>
        <div className="col-span-3 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
          Destination
        </div>
        <div className="col-span-3 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
          Labels Required
        </div>
        <div className="col-span-3 p-2 font-semibold">Labels destroyed</div>
      </div>
    </div>
  );
};

export const BatchForm: React.FC<BatchFormProps> = ({
  totalLiters,
  onChange,
}) => {
  return (
    <>
      {/* Container Section 1 */}
      <ContainerSection />

      {/* Container Section 2 */}
      <ContainerSection />

      {/* Container Section 3 */}
      <ContainerSection />

      {/* Container Section 4 */}
      <ContainerSection />

      {/* Total Liters Produced */}
      <div className="col-span-12 border border-gray-300 dark:border-gray-600">
        <div className="grid grid-cols-12">
          <div className="col-span-4 p-2 font-semibold border-r border-gray-300 dark:border-gray-600 text-center">
            TOTAL Lts PRODUCED
          </div>
          <div className="col-span-8 p-2">
            <input
              type="text"
              className="form-control"
              aria-label="Total Liters Produced"
              placeholder="Total Liters"
              name="totalLiters"
              value={totalLiters}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};
