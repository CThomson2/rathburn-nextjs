"use client";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, {
  Fragment,
  useState,
  useRef,
  useEffect,
  FormEvent,
  ChangeEvent,
} from "react";
import {
  TopForm,
  BatchForm,
  BottomForm,
  TopFormType,
  BatchFormType,
  BottomFormType,
} from "@/features/forms/qrd";

const ProductionRecord = () => {
  // State management for form completion
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // Get today's date in YYYY-MM-DD format for default values
  const today = new Date().toISOString().split("T")[0];

  // Form data state with updated structure
  const [formData, setFormData] = useState({
    // TopForm sections as an array
    topSections: [
      {
        distillation_id: 0, // This would be auto-generated in a real app
        manufacturer: "",
        material: "",
        drum_id: 0,
        still_code: "",
        date: today, // Initialize with today's date
        transporter: "",
        loader: "",
        operator: "",
      } as TopFormType,
    ],

    // BatchForm sections
    batchSections: [
      {
        grade: "HPLC" as "HPLC",
        container_size: 0,
        container_qty: 0,
        batch_code: "",
        po_number: "",
        label_count: 0,
        labels_destroyed: 0,
        labels_remaining: 0,
        created_at: today, // Initialize with today's date
        updated_at: today, // Initialize with today's date
      } as BatchFormType,
    ],

    // Total litres field (separate for easy access)
    totalLiters: "",

    // BottomForm data
    bottomData: {
      start_date: today, // Initialize with today's date
      loading_date: today, // Initialize with today's date
      completion_date: today, // Initialize with today's date
      start_temp: 0,
      cleaning_req: false,
      vented: false,
      SOP: false,
      operator: "",
      second_check: "",
    } as BottomFormType,
  });

  // Handle input changes for top form sections
  const handleTopFormChange = (
    sectionIndex: number,
    field: keyof TopFormType,
    value: string
  ) => {
    setFormData((prevData) => {
      const newTopSections = [...prevData.topSections];

      // For numerical fields, convert string value to number
      if (field === "drum_id") {
        newTopSections[sectionIndex] = {
          ...newTopSections[sectionIndex],
          [field]: value === "" ? 0 : Number(value),
        };
      } else {
        newTopSections[sectionIndex] = {
          ...newTopSections[sectionIndex],
          [field]: value,
        };
      }

      return {
        ...prevData,
        topSections: newTopSections,
      };
    });
  };

  // Add a new top form section
  const handleAddTopSection = () => {
    setFormData((prevData) => {
      if (prevData.topSections.length >= 3) return prevData; // Maximum of 3 sections

      // Create a new section with default values
      const newSection: TopFormType = {
        distillation_id: 0,
        manufacturer: "",
        material: "ACETONITRILE",
        drum_id: 0,
        still_code: "",
        date: today, // Set default date for new sections
        transporter: "",
        loader: "",
        operator: "",
      };

      return {
        ...prevData,
        topSections: [...prevData.topSections, newSection],
      };
    });
  };

  // Remove a top form section
  const handleRemoveTopSection = (index: number) => {
    setFormData((prevData) => {
      if (index === 0 || prevData.topSections.length <= 1) return prevData; // Can't remove the first section

      const newTopSections = [...prevData.topSections];
      newTopSections.splice(index, 1);

      return {
        ...prevData,
        topSections: newTopSections,
      };
    });
  };

  // Handle input changes for batch form sections
  const handleBatchFormChange = (
    sectionIndex: number,
    field: keyof BatchFormType,
    value: string
  ) => {
    setFormData((prevData) => {
      const newBatchSections = [...prevData.batchSections];

      // Handling different field types
      if (
        [
          "container_size",
          "container_qty",
          "label_count",
          "labels_destroyed",
          "labels_remaining",
        ].includes(field)
      ) {
        newBatchSections[sectionIndex] = {
          ...newBatchSections[sectionIndex],
          [field]: value === "" ? 0 : Number(value),
        };
      } else {
        newBatchSections[sectionIndex] = {
          ...newBatchSections[sectionIndex],
          [field]: value,
        };
      }

      return {
        ...prevData,
        batchSections: newBatchSections,
      };
    });
  };

  // Add a new batch form section
  const handleAddBatchSection = () => {
    setFormData((prevData) => {
      if (prevData.batchSections.length >= 4) return prevData; // Maximum of 4 sections

      // Create a new section with default values
      const newSection: BatchFormType = {
        grade: "HPLC" as "HPLC",
        container_size: 0,
        container_qty: 0,
        batch_code: "",
        po_number: "",
        label_count: 0,
        labels_destroyed: 0,
        labels_remaining: 0,
        created_at: today, // Initialize with today's date
        updated_at: today, // Initialize with today's date
      };

      return {
        ...prevData,
        batchSections: [...prevData.batchSections, newSection],
      };
    });
  };

  // Remove a batch form section
  const handleRemoveBatchSection = (index: number) => {
    setFormData((prevData) => {
      if (index === 0 || prevData.batchSections.length <= 1) return prevData; // Can't remove the first section

      const newBatchSections = [...prevData.batchSections];
      newBatchSections.splice(index, 1);

      return {
        ...prevData,
        batchSections: newBatchSections,
      };
    });
  };

  // Handle total litres change
  const handleTotalLitersChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      totalLiters: value,
    }));
  };

  // Handle bottom form changes
  const handleBottomFormChange = (
    field: keyof BottomFormType,
    value: string | boolean
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      bottomData: {
        ...prevData.bottomData,
        [field]: value,
      },
    }));
  };

  // Form validation function
  const validateForm = () => {
    // This is where you would implement business logic validation
    let isValid = true;
    const errors: string[] = [];

    // Validate top sections
    formData.topSections.forEach((section, index) => {
      if (!section.material) {
        errors.push(`Top section ${index + 1}: Material is required`);
        isValid = false;
      }
      if (!section.still_code) {
        errors.push(`Top section ${index + 1}: Still code is required`);
        isValid = false;
      }
      if (!section.date) {
        errors.push(`Top section ${index + 1}: Date is required`);
        isValid = false;
      }

      // Check for initials (exactly 2 characters)
      if (section.transporter && section.transporter.length !== 2) {
        errors.push(
          `Top section ${
            index + 1
          }: Transporter initials must be exactly 2 characters`
        );
        isValid = false;
      }
      if (section.loader && section.loader.length !== 2) {
        errors.push(
          `Top section ${
            index + 1
          }: Loader initials must be exactly 2 characters`
        );
        isValid = false;
      }
      if (section.operator && section.operator.length !== 2) {
        errors.push(
          `Top section ${
            index + 1
          }: Operator initials must be exactly 2 characters`
        );
        isValid = false;
      }
    });

    // Validate batch sections
    formData.batchSections.forEach((section, index) => {
      if (!section.grade) {
        errors.push(`Batch section ${index + 1}: Grade is required`);
        isValid = false;
      }
      if (!section.batch_code) {
        errors.push(`Batch section ${index + 1}: Batch code is required`);
        isValid = false;
      }
    });

    // Validate bottom form data
    if (!formData.bottomData.completion_date) {
      errors.push("Bottom section: Completion date is required");
      isValid = false;
    }

    if (
      formData.bottomData.operator &&
      formData.bottomData.operator.length !== 2
    ) {
      errors.push(
        "Bottom section: Operator initials must be exactly 2 characters"
      );
      isValid = false;
    }

    if (
      formData.bottomData.second_check &&
      formData.bottomData.second_check.length !== 2
    ) {
      errors.push(
        "Bottom section: Second check initials must be exactly 2 characters"
      );
      isValid = false;
    }

    if (!isValid) {
      alert(`Please fix the following errors:\n${errors.join("\n")}`);
    }

    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted with values:", formData);

    if (validateForm()) {
      setIsFormCompleted(true);
      console.log("Form validated successfully, ready for PDF generation");
    }
  };

  // Function to generate PDF
  const generatePDF = async () => {
    if (!isFormCompleted) {
      console.error("Cannot generate PDF: form not completed");
      return;
    }

    console.log("Starting server-side PDF generation...");
    setIsGeneratingPDF(true);

    try {
      console.log("Sending form data to server:", formData);

      // Call the server API endpoint
      const response = await fetch("/api/pdf/generate/qrd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Server error: ${errorData.message || response.statusText}`
        );
      }

      const data = await response.json();
      console.log("PDF generated successfully:", data);

      // Open the PDF in a new tab
      if (data.pdfUrl) {
        window.open(data.pdfUrl, "_blank");
      }

      setIsGeneratingPDF(false);
    } catch (error) {
      console.error("Error generating PDF:", error);
      setIsGeneratingPDF(false);
      alert(`Failed to generate PDF: ${(error as Error).message}`);
    }
  };

  // Reset form state
  const resetForm = () => {
    setIsFormCompleted(false);
    setFormData({
      topSections: [
        {
          distillation_id: 0,
          manufacturer: "",
          material: "ACETONITRILE 1st PROCESS",
          drum_id: 0,
          still_code: "",
          date: today, // Reset with today's date
          transporter: "",
          loader: "",
          operator: "",
        } as TopFormType,
      ],
      batchSections: [
        {
          grade: "HPLC" as "HPLC",
          container_size: 0,
          container_qty: 0,
          batch_code: "",
          po_number: "",
          label_count: 0,
          labels_destroyed: 0,
          labels_remaining: 0,
          created_at: today, // Reset with today's date
          updated_at: today, // Reset with today's date
        } as BatchFormType,
      ],
      totalLiters: "",
      bottomData: {
        start_date: today, // Reset with today's date
        loading_date: today, // Reset with today's date
        completion_date: today, // Reset with today's date
        start_temp: 0,
        cleaning_req: false,
        vented: false,
        SOP: false,
        operator: "",
        second_check: "",
      } as BottomFormType,
    });
  };

  // Side effect to load necessary script
  useEffect(() => {
    // You could load any required scripts here if needed
  }, []);

  return (
    <Fragment>
      <Seo title={"QRD 11 - Still Record"} />
      <Pageheader
        currentpage="QRD 11 - Still Record"
        activepage="Production"
        mainpage="QRD 11 - Still Record"
      />

      <form onSubmit={handleSubmit}>
        <div className="box" ref={formRef}>
          <div className="box-header">
            <h1 className="box-title text-center text-xl font-bold">
              RATHBURN QRD011DP
            </h1>
          </div>
          <div className="box-body">
            <div className="grid grid-cols-12 gap-4 mb-6">
              {/* Top Form Section with dynamic sections */}
              <TopForm
                formData={{ topSections: formData.topSections }}
                onChange={handleTopFormChange}
                onAddSection={handleAddTopSection}
                onRemoveSection={handleRemoveTopSection}
              />

              {/* Batch Form Section with dynamic sections */}
              <BatchForm
                batchSections={formData.batchSections}
                totalLiters={formData.totalLiters}
                onChange={handleBatchFormChange}
                onTotalLitersChange={handleTotalLitersChange}
                onAddSection={handleAddBatchSection}
                onRemoveSection={handleRemoveBatchSection}
              />

              {/* Bottom Form Section */}
              <BottomForm
                formData={formData.bottomData}
                onChange={handleBottomFormChange}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            type="button"
            onClick={resetForm}
            className="ti-btn ti-btn-danger"
          >
            Cancel
          </button>
          <button type="submit" className="ti-btn ti-btn-primary">
            Submit
          </button>
          {isFormCompleted && (
            <button
              type="button"
              onClick={generatePDF}
              disabled={isGeneratingPDF}
              className="ti-btn bg-green-500 hover:bg-green-600 text-white"
            >
              {isGeneratingPDF ? "Generating PDF..." : "Download PDF"}
            </button>
          )}
        </div>
      </form>
    </Fragment>
  );
};

export default ProductionRecord;
