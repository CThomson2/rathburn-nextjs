import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { ScheduleType, DistillationType } from "@/features/production/types";

interface RequestData {
  scheduleId: number;
  distillationId: number;
}

// Function to get schedule data - this would be replaced with actual database calls
const getScheduleData = async (
  scheduleId: number
): Promise<ScheduleType | null> => {
  // Mock data for demonstration
  const today = new Date();
  return {
    schedule_id: scheduleId,
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
    ],
  };
};

// Helper for formatting date in filename
const formatDateForFileName = (date: Date): string => {
  const day = date.getDate();
  const month = String.fromCharCode(65 + date.getMonth()); // A for January, B for February, etc.
  const year = date.getFullYear().toString().substring(2); // Last two digits

  return `${day}${month}${year}`;
};

export async function POST(req: NextRequest) {
  try {
    // Get request data
    const requestData: RequestData = await req.json();
    console.log("Received data for PDF generation:", requestData);

    // Get schedule data
    const schedule = await getScheduleData(requestData.scheduleId);
    if (!schedule) {
      return NextResponse.json(
        {
          success: false,
          message: "Schedule not found",
        },
        { status: 404 }
      );
    }

    // Find the distillation
    const distillation = schedule.distillations.find(
      (d) => d.distillation_id === requestData.distillationId
    );
    if (!distillation) {
      return NextResponse.json(
        {
          success: false,
          message: "Distillation not found",
        },
        { status: 404 }
      );
    }

    // Generate a unique filename
    const filename = `distillation-${
      distillation.still_code
    }-${Date.now()}.pdf`;
    const pdfPath = path.join(process.cwd(), "public", "pdfs", filename);

    // Create the directory if it doesn't exist
    const dir = path.dirname(pdfPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Generate HTML template for PDF
    const htmlContent = generateHtmlTemplate(schedule, distillation);

    // Launch puppeteer to generate PDF
    const browser = await puppeteer.launch({ headless: "new" as any });
    const page = await browser.newPage();

    // Set content and generate PDF
    await page.setContent(htmlContent);
    await page.pdf({
      path: pdfPath,
      format: "A4",
      printBackground: true,
      margin: {
        top: "10mm",
        right: "10mm",
        bottom: "10mm",
        left: "10mm",
      },
    });

    await browser.close();

    // Return the PDF URL to the client
    const pdfUrl = `/pdfs/${filename}`;

    return NextResponse.json({
      success: true,
      message: "PDF generated successfully",
      pdfUrl,
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to generate PDF",
        error: String(error),
      },
      { status: 500 }
    );
  }
}

// Helper function to generate HTML template for the PDF
function generateHtmlTemplate(
  schedule: ScheduleType,
  distillation: DistillationType
) {
  // Format date for display
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-GB"); // Format as DD/MM/YYYY
    } catch (e) {
      return dateString; // Return original if parsing fails
    }
  };

  // List of details if available
  const detailsHtml = distillation.details
    ? distillation.details
        .map(
          (detail) => `
      <div class="form-row">
        <div class="form-cell" style="padding: 8px;">${detail}</div>
      </div>
    `
        )
        .join("")
    : "";

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Distillation Report - ${distillation.still_code}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          color: black;
          background-color: white;
        }
        .container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          text-align: center;
          margin-bottom: 20px;
          border-bottom: 2px solid #444;
          padding-bottom: 10px;
        }
        .schedule-info {
          margin-bottom: 20px;
          display: flex;
          justify-content: space-between;
        }
        .info-item {
          margin-bottom: 10px;
        }
        .label {
          font-weight: bold;
        }
        .form-section {
          border: 1px solid #333;
          margin-bottom: 15px;
        }
        .form-row {
          display: flex;
          border-bottom: 1px solid #333;
        }
        .form-row:last-child {
          border-bottom: none;
        }
        .form-cell {
          padding: 8px;
          border-right: 1px solid #333;
          flex: 1;
        }
        .form-cell:last-child {
          border-right: none;
        }
        .form-header {
          font-weight: bold;
          background-color: #f5f5f5;
        }
        .distillation-details {
          margin-top: 20px;
        }
        .footer {
          margin-top: 30px;
          text-align: center;
          font-size: 12px;
          border-top: 1px solid #ddd;
          padding-top: 10px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Distillation Report</h1>
          <h2>${schedule.schedule_name}</h2>
          <p>Site: ${schedule.site} | Date: ${formatDate(schedule.date)}</p>
        </div>
        
        <div class="schedule-info">
          <div>
            <div class="info-item">
              <span class="label">Schedule ID:</span> ${schedule.schedule_id}
            </div>
            <div class="info-item">
              <span class="label">Employees:</span> ${schedule.employees.join(
                ", "
              )}
            </div>
          </div>
          <div>
            <div class="info-item">
              <span class="label">Status:</span> ${schedule.schedule_status}
            </div>
            <div class="info-item">
              <span class="label">Created:</span> ${formatDate(
                schedule.created_at
              )}
            </div>
          </div>
        </div>
        
        <div class="form-section">
          <div class="form-row">
            <div class="form-cell form-header">Still Code</div>
            <div class="form-cell">${distillation.still_code}</div>
          </div>
          <div class="form-row">
            <div class="form-cell form-header">Solvent</div>
            <div class="form-cell">${distillation.solvent}</div>
          </div>
          <div class="form-row">
            <div class="form-cell form-header">Description</div>
            <div class="form-cell">${distillation.description}</div>
          </div>
          <div class="form-row">
            <div class="form-cell form-header">Quantity (L)</div>
            <div class="form-cell">${distillation.quantity}</div>
          </div>
          <div class="form-row">
            <div class="form-cell form-header">Last Updated</div>
            <div class="form-cell">${formatDate(distillation.updated_at)}</div>
          </div>
        </div>
        
        <div class="distillation-details">
          <h3>Process Details</h3>
          <div class="form-section">
            ${
              detailsHtml ||
              '<div class="form-row"><div class="form-cell">No additional details provided.</div></div>'
            }
          </div>
        </div>
        
        <div class="footer">
          <p>Generated on ${new Date().toLocaleString()}</p>
          <p>Rathburn Chemicals Ltd.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
