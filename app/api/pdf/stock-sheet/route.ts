import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

const prisma = new PrismaClient();

// Function to draw headers and lines on a page
function drawPageHeaders(
  page: any,
  width: number,
  height: number,
  helveticaBold: any,
  colWidths: number[],
  isFirstPage: boolean = false
) {
  const headers = [
    "Material Name",
    "Supplier",
    "NEW",
    "REPRO",
    "Loc.",
    "Notes",
  ];

  // Title on first page only
  if (isFirstPage) {
    page.setFont(helveticaBold);
    page.setFontSize(18);
    page.drawText("Raw Materials Inventory List", {
      x: width / 2 - 120,
      y: height - 50,
      color: rgb(0, 0, 0),
    });
  }

  // Table Headers
  page.setFont(helveticaBold);
  page.setFontSize(isFirstPage ? 12 : 10);

  let x = 50;
  let y = isFirstPage ? height - 100 : height - 50;

  // Draw headers
  headers.forEach((header, index) => {
    page.drawText(header, {
      x: x + 5, // Slight indent from vertical line
      y,
      color: rgb(0, 0, 0),
    });
    x += colWidths[index];
  });

  // Draw horizontal header line
  y -= 15;
  page.drawLine({
    start: { x: 50, y },
    end: { x: width - 50, y },
    thickness: 1,
    color: rgb(0, 0, 0),
  });

  // Draw vertical lines
  let xLine = 50;
  colWidths.forEach((width) => {
    page.drawLine({
      start: {
        x: xLine,
        y: isFirstPage ? height - 100 + 20 : height - 50 + 20,
      },
      end: { x: xLine, y: 50 },
      thickness: 1,
      color: rgb(0, 0, 0),
    });
    xLine += width;
  });
  // Draw final vertical line
  page.drawLine({
    start: { x: xLine, y: isFirstPage ? height - 100 + 20 : height - 50 + 20 },
    end: { x: xLine, y: 50 },
    thickness: 1,
    color: rgb(0, 0, 0),
  });

  return y - 20; // Return the Y position for content to start
}

export async function GET() {
  try {
    // Fetch all material names from the inventory schema
    const materials = await prisma.$queryRaw<{ name: string }[]>`
            SELECT name FROM public.raw_materials
            ORDER BY name;
        `;

    // Create a PDF document
    const pdfDoc = await PDFDocument.create();
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    // Add first page in landscape
    let page = pdfDoc.addPage([792, 612]); // Letter size in landscape (swapped dimensions)
    const { width, height } = page.getSize();

    // Define column widths for landscape - adjusted for new requirements
    // Material Name | Supplier | NEW | REPRO | Loc. | Notes
    const colWidths = [180, 170, 60, 60, 50, 220];

    // Draw headers on first page
    let y = drawPageHeaders(
      page,
      width,
      height,
      helveticaBold,
      colWidths,
      true
    );

    // Table Rows
    page.setFont(helveticaFont);
    page.setFontSize(12); // Normal size for first page

    materials.forEach((material, index) => {
      // Check if we need a new page - need more space for variant rows
      if (y < 90) {
        // Increased minimum height check to ensure room for variant rows
        page = pdfDoc.addPage([792, 612]); // New landscape page
        page.setFont(helveticaFont);
        page.setFontSize(10); // Smaller text for subsequent pages
        y = drawPageHeaders(page, width, height, helveticaBold, colWidths);
      }

      // Draw material name
      page.drawText(material.name, {
        x: 55, // Slight indent from vertical line
        y,
        color: rgb(0, 0, 0),
      });

      // Draw row divider line
      y -= 15;
      page.drawLine({
        start: { x: 50, y },
        end: { x: width - 50, y },
        thickness: 0.5,
        color: rgb(0, 0, 0),
      });
      y -= 10;

      // Draw two empty variant rows with lighter divider lines
      for (let i = 0; i < 2; i++) {
        y -= 25;
        page.drawLine({
          start: { x: 50, y },
          end: { x: width - 50, y },
          thickness: 0.5,
          color: rgb(0.7, 0.7, 0.7), // Lighter gray for variant rows
        });
      }

      // Space between material groups
      y -= 10;
    });

    // Generate the PDF
    const pdfBytes = await pdfDoc.save();

    return new NextResponse(pdfBytes, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=materials.pdf",
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
