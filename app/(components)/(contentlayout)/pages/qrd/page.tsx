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
import { TopForm, BatchForm, BottomForm } from "@/features/forms/qrd";

const ProductionRecord = () => {
  // State management for form completion
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // Form data state
  const [formData, setFormData] = useState({
    material1: "ACETONITRILE 1st PROCESS",
    drum1: "",
    material2: "ACETONITRILE",
    drum2: "",
    totalLiters: "",
    operator: "",
    secondCheck: "",
    startDate: "",
    completionDate: "",
  });

  // Handle input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Mock validation function - in a real app you would check all required fields
  const validateForm = () => {
    // This is a simplified validation - in a real app, check all required fields
    return true; // For demo purposes, form is always valid
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted with values:", formData);

    if (validateForm()) {
      setIsFormCompleted(true);
      console.log("Form validated successfully, ready for PDF generation");
      // In a real app, you would submit the form data to the server here
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
      const response = await fetch("/api/pdf/generate", {
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
      material1: "ACETONITRILE 1st PROCESS",
      drum1: "",
      material2: "ACETONITRILE",
      drum2: "",
      totalLiters: "",
      operator: "",
      secondCheck: "",
      startDate: "",
      completionDate: "",
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
              {/* Top Form Section */}
              <TopForm formData={formData} onChange={handleInputChange} />

              {/* Batch Form Section */}
              <BatchForm
                totalLiters={formData.totalLiters}
                onChange={handleInputChange}
              />

              {/* Bottom Form Section */}
              <BottomForm formData={formData} onChange={handleInputChange} />
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
