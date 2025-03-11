/**
 * Type declarations for PDFKit
 * This is a simplified version - the @types/pdfkit package has more complete definitions
 */

declare module "pdfkit" {
  import { Readable } from "stream";

  interface PDFDocumentOptions {
    size?: string | [number, number];
    margin?: number;
    margins?: { top: number; left: number; bottom: number; right: number };
    layout?: "portrait" | "landscape";
    info?: {
      Title?: string;
      Author?: string;
      Subject?: string;
      Keywords?: string;
    };
    autoFirstPage?: boolean;
    compress?: boolean;
    userPassword?: string;
    ownerPassword?: string;
    permissions?: {
      printing?: string;
      modifying?: boolean;
      copying?: boolean;
      annotating?: boolean;
      fillingForms?: boolean;
      contentAccessibility?: boolean;
      documentAssembly?: boolean;
    };
    bufferPages?: boolean;
    pdfVersion?: string;
  }

  class PDFDocument extends Readable {
    constructor(options?: PDFDocumentOptions);

    addPage(options?: PDFDocumentOptions): this;
    font(src: string, family?: string): this;
    fontSize(size: number): this;
    text(text: string, x?: number, y?: number, options?: any): this;
    moveDown(lines?: number): this;
    fillColor(color: string, opacity?: number): this;
    strokeColor(color: string, opacity?: number): this;
    lineWidth(width: number): this;
    rect(x: number, y: number, w: number, h: number): this;
    circle(x: number, y: number, radius: number): this;
    polygon(...points: number[]): this;
    lineTo(x: number, y: number): this;
    moveTo(x: number, y: number): this;
    stroke(): this;
    fill(): this;
    end(): void;

    // Add more methods as needed
  }

  export default PDFDocument;
}
