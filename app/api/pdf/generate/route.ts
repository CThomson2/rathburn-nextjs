import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    // Get form data from request
    const formData = await req.json();
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
function generateHtmlTemplate(formData: any) {
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
        .form-cell-4 {
          width: 33.33%;
        }
        .form-cell-3 {
          width: 25%;
        }
        .form-cell-2 {
          width: 16.66%;
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
        
        <!-- First Production Record Section -->
        <div class="form-section">
          <div class="form-row">
            <div class="form-cell form-cell-4 form-header">PRODUCTION RECORD</div>
            <div class="form-cell form-cell-2 form-header">STILL</div>
            <div class="form-cell form-cell-2"></div>
            <div class="form-cell form-cell-4 form-header">MFR</div>
          </div>
          <div class="form-row">
            <div class="form-cell form-cell-2 form-header">Material</div>
            <div class="form-cell form-cell-4">${
              formData.material1 || "ACETONITRILE 1st PROCESS"
            }</div>
            <div class="form-cell form-cell-2 form-header">DRUM#</div>
            <div class="form-cell form-cell-2">${formData.drum1 || ""}</div>
            <div class="form-cell form-cell-2 form-header">Date</div>
          </div>
          <div class="form-row">
            <div class="form-cell form-cell-4 form-header">*TRANSPORT</div>
            <div class="form-cell form-cell-4 form-header">*LOADER</div>
            <div class="form-cell form-cell-4 form-header">*OPERATOR/2nd CHECK</div>
          </div>
        </div>
        
        <!-- Second Production Record Section -->
        <div class="form-section">
          <div class="form-row">
            <div class="form-cell form-cell-4 form-header">PRODUCTION RECORD</div>
            <div class="form-cell form-cell-2 form-header">STILL</div>
            <div class="form-cell form-cell-2"></div>
            <div class="form-cell form-cell-4 form-header">MFR</div>
          </div>
          <div class="form-row">
            <div class="form-cell form-cell-2 form-header">Material</div>
            <div class="form-cell form-cell-4">${
              formData.material2 || "ACETONITRILE"
            }</div>
            <div class="form-cell form-cell-2 form-header">DRUM#</div>
            <div class="form-cell form-cell-2">${formData.drum2 || ""}</div>
            <div class="form-cell form-cell-2 form-header">Date</div>
          </div>
          <div class="form-row">
            <div class="form-cell form-cell-4 form-header">*TRANSPORT</div>
            <div class="form-cell form-cell-4 form-header">*LOADER</div>
            <div class="form-cell form-cell-4 form-header">*OPERATOR/2nd CHECK</div>
          </div>
        </div>
        
        <!-- Confirmation -->
        <div class="confirmation">
          *I CAN CONFIRM THAT THE INFORMATION CONTAINED ABOVE IS CORRECT
        </div>
        
        <!-- Total Liters Produced -->
        <div class="form-section">
          <div class="form-row">
            <div class="form-cell form-cell-4 form-header">TOTAL Lts PRODUCED</div>
            <div class="form-cell form-cell-8">${
              formData.totalLiters || ""
            }</div>
          </div>
        </div>
        
        <!-- Personnel -->
        <div class="form-section">
          <div class="form-row">
            <div class="form-cell form-cell-3 form-header">*Operator</div>
            <div class="form-cell form-cell-3">${formData.operator || ""}</div>
            <div class="form-cell form-cell-3 form-header">Date</div>
            <div class="form-cell form-cell-3">${formData.startDate || ""}</div>
          </div>
          <div class="form-row">
            <div class="form-cell form-cell-3 form-header">*2nd Check</div>
            <div class="form-cell form-cell-3">${
              formData.secondCheck || ""
            }</div>
            <div class="form-cell form-cell-3 form-header">Completion Date</div>
            <div class="form-cell form-cell-3">${
              formData.completionDate || ""
            }</div>
          </div>
        </div>
        
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
