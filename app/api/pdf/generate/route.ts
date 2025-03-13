import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import {
  TopFormType,
  BatchFormType,
  BottomFormType,
} from "@/features/forms/qrd/types";

interface FormData {
  topSections: TopFormType[];
  batchSections: BatchFormType[];
  totalLiters: string;
  bottomData: BottomFormType;
}

export async function POST(req: NextRequest) {
  try {
    // Get form data from request
    const formData: FormData = await req.json();
    console.log("Received form data for PDF generation:", formData);

    // In a production environment, you would validate the data here

    // Generate a unique filename or use a form identifier
    const filename = `qrd011dp-${Date.now()}.pdf`;
    const pdfPath = path.join(process.cwd(), "public", "pdfs", filename);

    // Create the directory if it doesn't exist
    const dir = path.dirname(pdfPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Generate HTML template for PDF
    const htmlContent = generateHtmlTemplate(formData);

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
function generateHtmlTemplate(formData: FormData) {
  const { topSections, batchSections, totalLiters, bottomData } = formData;

  // Helper function to format dates for display
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-GB"); // Format as DD/MM/YYYY
    } catch (e) {
      return dateString; // Return original if parsing fails
    }
  };

  // Generate dynamic Production Record sections
  const topSectionsHtml = topSections
    .map((section) => {
      return `
      <div class="form-section">
        <div class="form-row">
          <div class="form-cell form-cell-4 form-header" style="width: 33.33%;">
            <div style="font-weight: bold;">RATHBURN QRD011DP</div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-cell form-cell-4 form-header" style="width: 33.33%;">Still Code</div>
          <div class="form-cell form-cell-8" style="width: 66.67%;">
            <span>${section.still_code || ""}</span>
            <span style="float: right; font-weight: bold; margin-right: 16px;">Manufacturer: ${
              section.manufacturer || ""
            }</span>
          </div>
        </div>
        <div class="form-row">
          <div class="form-cell form-cell-4 form-header" style="width: 33.33%;">Material</div>
          <div class="form-cell form-cell-3" style="width: 25%;">${
            section.material || ""
          }</div>
          <div class="form-cell form-cell-3 form-header" style="width: 16.67%;">DRUM ID</div>
          <div class="form-cell form-cell-2" style="width: 8.33%;">${
            section.drum_id || ""
          }</div>
          <div class="form-cell form-cell-2 form-header" style="width: 8.33%;">Date</div>
          <div class="form-cell form-cell-2" style="width: 8.33%;">${
            formatDate(section.date) || ""
          }</div>
        </div>
        <div class="form-row">
          <div class="form-cell form-cell-4 form-header" style="width: 33.33%;">*TRANSPORT</div>
          <div class="form-cell form-cell-4" style="width: 33.33%;">${
            section.transporter || ""
          }</div>
          <div class="form-cell form-cell-4 form-header" style="width: 33.33%;">*LOADER</div>
          <div class="form-cell form-cell-4" style="width: 33.33%;">${
            section.loader || ""
          }</div>
          <div class="form-cell form-cell-4 form-header" style="width: 33.33%;">*OPERATOR/2nd CHECK</div>
          <div class="form-cell form-cell-4" style="width: 33.33%;">${
            section.operator || ""
          }</div>
        </div>
      </div>
    `;
    })
    .join("");

  // Generate dynamic Batch sections
  const batchSectionsHtml = batchSections
    .map((section) => {
      return `
      <div class="form-section">
        <div class="form-row">
          <div class="form-cell form-cell-3 form-header" style="width: 25%;">Grade</div>
          <div class="form-cell form-cell-3" style="width: 25%;">${
            section.grade || ""
          }</div>
          <div class="form-cell form-cell-3 form-header" style="width: 25%;">Container Size (L)</div>
          <div class="form-cell form-cell-3" style="width: 25%;">${
            section.container_size || ""
          }</div>
        </div>
        <div class="form-row">
          <div class="form-cell form-cell-3 form-header" style="width: 25%;">Container Qty</div>
          <div class="form-cell form-cell-3" style="width: 25%;">${
            section.container_qty || ""
          }</div>
          <div class="form-cell form-cell-3 form-header" style="width: 25%;">Batch Code</div>
          <div class="form-cell form-cell-3" style="width: 25%;">${
            section.batch_code || ""
          }</div>
        </div>
        <div class="form-row">
          <div class="form-cell form-cell-3 form-header" style="width: 25%;">PO Number</div>
          <div class="form-cell form-cell-9" style="width: 75%;">${
            section.po_number || ""
          }</div>
        </div>
        <div class="form-row">
          <div class="form-cell form-cell-3 form-header" style="width: 25%;">Label Count</div>
          <div class="form-cell form-cell-3" style="width: 25%;">${
            section.label_count || ""
          }</div>
          <div class="form-cell form-cell-3 form-header" style="width: 25%;">Labels Destroyed</div>
          <div class="form-cell form-cell-3" style="width: 25%;">${
            section.labels_destroyed || ""
          }</div>
        </div>
        <div class="form-row">
          <div class="form-cell form-cell-3 form-header" style="width: 25%;">Labels Remaining</div>
          <div class="form-cell form-cell-9" style="width: 75%;">${
            section.labels_remaining || ""
          }</div>
        </div>
      </div>
    `;
    })
    .join("");

  // Generate Bottom Form section
  const bottomSectionHtml = `
    <div class="form-section">
      <div class="form-row">
        <div class="form-cell form-cell-4 form-header" style="width: 33.33%;">Total Lts. Produced</div>
        <div class="form-cell form-cell-8" style="width: 66.67%;">${
          totalLiters || ""
        }</div>
      </div>
    </div>
    
    <div class="form-section">
      <div class="form-row">
        <div class="form-cell form-cell-4 form-header" style="width: 33.33%;">Start Date</div>
        <div class="form-cell form-cell-8" style="width: 66.67%;">${
          formatDate(bottomData.start_date) || ""
        }</div>
      </div>
      <div class="form-row">
        <div class="form-cell form-cell-4 form-header" style="width: 33.33%;">Loading Date</div>
        <div class="form-cell form-cell-8" style="width: 66.67%;">${
          formatDate(bottomData.loading_date) || ""
        }</div>
      </div>
      <div class="form-row">
        <div class="form-cell form-cell-4 form-header" style="width: 33.33%;">Completion Date</div>
        <div class="form-cell form-cell-8" style="width: 66.67%;">${
          formatDate(bottomData.completion_date) || ""
        }</div>
      </div>
    </div>
    
    <div class="form-section">
      <div class="form-row">
        <div class="form-cell form-cell-4 form-header" style="width: 33.33%;">Start Temp (°C)</div>
        <div class="form-cell form-cell-8" style="width: 66.67%;">${
          bottomData.start_temp || ""
        }</div>
      </div>
      <div class="form-row">
        <div class="form-cell form-cell-4 form-header" style="width: 33.33%;">Cleaning Required</div>
        <div class="form-cell form-cell-8" style="width: 66.67%;">${
          bottomData.cleaning_req ? "Yes" : "No"
        }</div>
      </div>
      <div class="form-row">
        <div class="form-cell form-cell-4 form-header" style="width: 33.33%;">Vented</div>
        <div class="form-cell form-cell-8" style="width: 66.67%;">${
          bottomData.vented ? "Yes" : "No"
        }</div>
      </div>
      <div class="form-row">
        <div class="form-cell form-cell-4 form-header" style="width: 33.33%;">SOP</div>
        <div class="form-cell form-cell-8" style="width: 66.67%;">${
          bottomData.SOP ? "Yes" : "No"
        }</div>
      </div>
    </div>
    
    <div class="form-section">
      <div class="form-row">
        <div class="form-cell form-cell-4 form-header" style="width: 33.33%;">Operator</div>
        <div class="form-cell form-cell-8" style="width: 66.67%;">${
          bottomData.operator || ""
        }</div>
      </div>
      <div class="form-row">
        <div class="form-cell form-cell-4 form-header" style="width: 33.33%;">Second Check</div>
        <div class="form-cell form-cell-8" style="width: 66.67%;">${
          bottomData.second_check || ""
        }</div>
      </div>
    </div>
  `;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>QRD011DP - Still Record</title>
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
        }
        .form-cell:last-child {
          border-right: none;
        }
        .form-header {
          font-weight: bold;
          background-color: #f5f5f5;
        }
        .confirmation {
          text-align: center;
          font-weight: bold;
          padding: 10px;
          border: 1px solid #333;
          margin-bottom: 15px;
        }
        .footer {
          margin-top: 30px;
          text-align: center;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>RATHBURN QRD011DP</h1>
        </div>
        
        <!-- Production Record Sections -->
        ${topSectionsHtml}
        
        <!-- Confirmation -->
        <div class="confirmation">
          *I CAN CONFIRM THAT THE INFORMATION CONTAINED ABOVE IS CORRECT
        </div>
        
        <!-- Batch Sections -->
        ${batchSectionsHtml}
        
        <!-- Bottom Form Sections -->
        ${bottomSectionHtml}
        
        <!-- Final Confirmation -->
        <div class="confirmation">
          *I can confirm that the product and processing information contained above is correct
        </div>
        
        <div class="footer">
          Generated on ${new Date().toLocaleString()}
        </div>
      </div>
    </body>
    </html>
  `;
}
