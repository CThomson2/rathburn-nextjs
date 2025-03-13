import { ScheduleType } from "../types";

/**
 * Generate a series of mock historical schedules for development
 */
export const getHistoricalSchedules = (count: number = 15): ScheduleType[] => {
  const schedules: ScheduleType[] = [];
  const today = new Date();

  for (let i = 0; i < count; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i * 3); // Every 3 days back in time

    const site = i % 2 === 0 ? "OLD" : "NEW";
    const scheduleDate = date.toISOString();
    const formattedDate = formatDateForFileName(date);

    schedules.push({
      schedule_id: i + 1,
      schedule_name: `PRODUCTION RECORD_QRD010_v3 ${formattedDate} ${site} site`,
      schedule_status: date >= today ? "active" : "complete",
      date: scheduleDate,
      employees: generateRandomEmployees(),
      site,
      created_at: scheduleDate,
      updated_at: scheduleDate,
      distillations: generateDistillations(date, site, i + 1),
    });
  }

  return schedules;
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

/**
 * Generate a list of random employee initials
 */
const generateRandomEmployees = (): string[] => {
  const allEmployees = ["CK", "RK", "BO", "GA", "JM", "LT", "SB", "MP", "DL"];
  const count = Math.floor(Math.random() * 3) + 1; // 1 to 3 employees

  // Shuffle and take first 'count' elements
  return [...allEmployees].sort(() => Math.random() - 0.5).slice(0, count);
};

/**
 * Generate distillations for a schedule
 */
const generateDistillations = (date: Date, site: string, seedId: number) => {
  const distillationCount = Math.floor(Math.random() * 4) + 2; // 2 to 5 distillations
  const stillCodes = ["A", "B", "C", "D", "E", "F", "G"];
  const solvents = [
    "Acetonitrile (ICC)",
    "Acetonitrile (REPRO DIST)",
    "1,2 Dimethoxyethane (Clariantc)",
    "Pentane washed (repro)",
    "Pentane washed (Caldic)",
    "Carbon Disulphide (Promo)",
    "Methanol (HPLC)",
    "Ethanol (HPLC)",
    "Isopropanol (HPLC)",
  ];

  const descriptions = [
    "1st Process",
    "QC slow forerun for HPLC cans 25lts.",
    "Check for HPLC 7 x 25lt cans (HOLD LABELS)",
    "144 x 1lt HON Chrom 307432 PO4503620762 #P0490, 12w HON stock",
    "QC forerun- 72w HPLC UK",
    "70 of 288 x 1lt Chrom 31627 PO4503625132 #P0500",
  ];

  const usedStillCodes = new Set<string>();
  const result = [];

  for (let i = 0; i < distillationCount; i++) {
    // Ensure unique still codes within a schedule
    let stillCode;
    do {
      stillCode = stillCodes[Math.floor(Math.random() * stillCodes.length)];
    } while (usedStillCodes.has(stillCode));

    usedStillCodes.add(stillCode);

    const solvent = solvents[Math.floor(Math.random() * solvents.length)];
    const description =
      descriptions[Math.floor(Math.random() * descriptions.length)];
    const quantity = Math.floor(Math.random() * 200) + 25; // 25 to 225 liters

    // Generate some details for some distillations
    const hasDetails = Math.random() > 0.5;
    const details = hasDetails
      ? [descriptions[Math.floor(Math.random() * descriptions.length)]]
      : [];

    result.push({
      distillation_id: seedId * 100 + i,
      solvent,
      description,
      quantity,
      still_code: stillCode,
      updated_at: date.toISOString(),
      details,
    });
  }

  return result;
};
