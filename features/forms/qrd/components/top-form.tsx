import React from "react";

interface TopFormProps {
  formData: {
    material1: string;
    drum1: string;
    material2: string;
    drum2: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// This component represents a single Production Record section
const ProductionRecordSection = ({
  isSectionOne = false,
  formData,
  onChange,
}: {
  isSectionOne?: boolean;
  formData: {
    material1: string;
    drum1: string;
    material2: string;
    drum2: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const materialName = isSectionOne ? "material1" : "material2";
  const drumName = isSectionOne ? "drum1" : "drum2";
  const defaultMaterial = isSectionOne
    ? "ACETONITRILE 1st PROCESS"
    : "ACETONITRILE";

  return (
    <div className="col-span-12 border border-gray-300 dark:border-gray-600">
      <div className="grid grid-cols-12 border-b border-gray-300 dark:border-gray-600">
        <div className="col-span-4 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
          PRODUCTION RECORD
        </div>
        <div className="col-span-2 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
          STILL
        </div>
        <div className="col-span-2 p-2 font-semibold"></div>
        <div className="col-span-4 p-2 font-semibold">MFR</div>
      </div>

      <div className="grid grid-cols-12 border-b border-gray-300 dark:border-gray-600">
        <div className="col-span-2 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
          Material
        </div>
        <div className="col-span-4 p-2 border-r border-gray-300 dark:border-gray-600">
          <input
            type="text"
            className="form-control"
            defaultValue={defaultMaterial}
            aria-label="Material"
            placeholder="Material"
            name={materialName}
            onChange={onChange}
          />
        </div>
        <div className="col-span-2 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
          DRUM#
        </div>
        <div className="col-span-2 p-2 border-r border-gray-300 dark:border-gray-600">
          <input
            type="text"
            className="form-control"
            aria-label="Drum Number"
            placeholder="Drum #"
            name={drumName}
            onChange={onChange}
          />
        </div>
        <div className="col-span-2 p-2 font-semibold">Date</div>
        <div className="col-span-12 lg:col-span-0 p-2"></div>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-4 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
          *TRANSPORT
        </div>
        <div className="col-span-4 p-2 font-semibold border-r border-gray-300 dark:border-gray-600">
          *LOADER
        </div>
        <div className="col-span-4 p-2 font-semibold">*OPERATOR/2nd CHECK</div>
      </div>
    </div>
  );
};

export const TopForm: React.FC<TopFormProps> = ({ formData, onChange }) => {
  return (
    <>
      {/* First Production Record Section */}
      <ProductionRecordSection
        isSectionOne={true}
        formData={formData}
        onChange={onChange}
      />

      {/* Second Production Record Section */}
      <ProductionRecordSection
        isSectionOne={false}
        formData={formData}
        onChange={onChange}
      />

      {/* Confirmation Section */}
      <div className="col-span-12 border border-gray-300 dark:border-gray-600 p-3 text-center font-semibold">
        *I CAN CONFIRM THAT THE INFORMATION CONTAINED ABOVE IS CORRECT
      </div>
    </>
  );
};
