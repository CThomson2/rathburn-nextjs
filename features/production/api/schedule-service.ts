import { ScheduleType, DistillationType } from "../types";

/**
 * Fetch a production schedule by ID
 */
export const getScheduleById = async (
  scheduleId: number
): Promise<ScheduleType | null> => {
  try {
    // This would be replaced with a real API call
    // For now, return mock data
    const response = await fetch(`/api/production/schedules/${scheduleId}`);

    if (!response.ok) {
      throw new Error("Failed to fetch schedule");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching schedule:", error);
    return null;
  }
};

/**
 * Fetch all production schedules
 */
export const getAllSchedules = async (): Promise<ScheduleType[]> => {
  try {
    // This would be replaced with a real API call
    // For now, return mock data
    const response = await fetch("/api/production/schedules");

    if (!response.ok) {
      throw new Error("Failed to fetch schedules");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching schedules:", error);
    return [];
  }
};

/**
 * Generate a PDF for a distillation
 */
export const generateDistillationPDF = async (
  scheduleId: number,
  distillationId: number
): Promise<string | null> => {
  try {
    const response = await fetch("/api/pdf/production-schedule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        scheduleId,
        distillationId,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate PDF");
    }

    const data = await response.json();
    return data.pdfUrl;
  } catch (error) {
    console.error("Error generating PDF:", error);
    return null;
  }
};

/**
 * Get mock data for development
 */
export const getMockScheduleData = (): ScheduleType => {
  const today = new Date();
  const yesterdayDate = new Date(today);
  yesterdayDate.setDate(today.getDate() - 1);

  return {
    schedule_id: 1,
    schedule_name: `PRODUCTION RECORD_QRD010_v3 ${formatDateForFileName(
      today
    )} OLD site`,
    schedule_status: "active",
    date: today.toISOString(),
    employees: ["CK", "RK", "BO"],
    site: "OLD",
    created_at: today.toISOString(),
    updated_at: today.toISOString(),
    distillations: [
      {
        distillation_id: 1,
        solvent: "Acetonitrile (ICC)",
        description: "1st Process",
        quantity: 25,
        still_code: "A",
        updated_at: today.toISOString(),
        details: ["QC slow forerun for HPLC cans 25lts."],
      },
      {
        distillation_id: 2,
        solvent: "Acetonitrile (REPRO DIST)",
        description: "QC slow forerun for HPLC cans 25lts.",
        quantity: 25,
        still_code: "B",
        updated_at: today.toISOString(),
        details: ["Check for HPLC 7 x 25lt cans (HOLD LABELS)"],
      },
      {
        distillation_id: 3,
        solvent: "1,2 Dimethoxyethane (Clariantc)",
        description:
          "144 x 1lt HON Chrom 307432 PO4503620762 #P0490, 12w HON stock Chrom 307432.",
        quantity: 144,
        still_code: "D",
        updated_at: today.toISOString(),
        details: [],
      },
      {
        distillation_id: 4,
        solvent: "Pentane washed (repro)",
        description: "Check for HPLC 7 x 25lt cans (HOLD LABELS)",
        quantity: 175,
        still_code: "E",
        updated_at: today.toISOString(),
        details: [],
      },
      {
        distillation_id: 5,
        solvent: "Pentane washed (Caldic)",
        description: "QC forerun- 72w HPLC UK",
        quantity: 72,
        still_code: "F",
        updated_at: today.toISOString(),
        details: [],
      },
      {
        distillation_id: 6,
        solvent: "Carbon Disulphide (Promo)",
        description: "70 of 288 x 1lt Chrom 31627 PO4503625132 #P0500",
        quantity: 70,
        still_code: "G",
        updated_at: today.toISOString(),
        details: [],
      },
    ],
  };
};

/**
 * Format date for filename (e.g., 25C14)
 */
const formatDateForFileName = (date: Date): string => {
  const day = date.getDate();
  const month = String.fromCharCode(65 + date.getMonth()); // A for January, B for February, etc.
  const year = date.getFullYear().toString().substring(2); // Last two digits

  return `${day}${month}${year}`;
};
