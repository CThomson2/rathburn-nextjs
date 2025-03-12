import { SerialPort, ReadlineParser } from "serialport";
import fs from "fs";
import { clientApi as api } from "../api-client/client";

// Define interfaces for API responses and requests
interface ScanResponse {
  success: boolean;
  data?: {
    drum_id: number;
    order_id: number;
    old_status: string;
    new_status?: string;
    message: string;
  };
  message?: string;
}

interface ScanRequest {
  barcode: string;
  timestamp: string;
}

console.log("Starting serial port setup...");

// Initialize the serial port with specified path and baud rate
const port = new SerialPort({
  path: "/dev/tty.usbmodem__Q21", // Replace with your actual port
  baudRate: 9600,
});

console.log("Serial port created");

// Create a parser to read data from the serial port, using a carriage return as the delimiter
const parser = new ReadlineParser({ delimiter: "\r" });
port.pipe(parser as unknown as NodeJS.WritableStream);

console.log("Parser created");

// Variable to store the last scanned data
let lastScan: string | null = null;

/**
 * Sends scanned data to the specified API endpoint.
 * @param {string} data - The scanned barcode data to be sent.
 */
async function sendDataToAPI(data: string): Promise<void> {
  try {
    const requestBody: ScanRequest = {
      barcode: data,
      timestamp: new Date().toISOString(),
    };

    const response = await api.post<ScanResponse>(
      "/barcodes/scan/drum",
      requestBody
    );
    console.log("Successfully sent to API:", response);
  } catch (error) {
    console.error(
      "Error sending to API:",
      error instanceof Error ? error.message : String(error)
    );
  }
}

// Event listener for incoming data from the serial port
parser.on("data", async (data: string) => {
  // Trim the received data and store it
  lastScan = data.trim();
  console.log(`Scanned Data (trimmed): ${lastScan}`); // Log the trimmed data

  // Send the scanned data to the API
  await sendDataToAPI(lastScan);

  // Append the scanned data to 'output.txt' with a newline
  fs.appendFile("output.txt", lastScan + "\n", (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Successfully wrote to file");
    }
  });
});

// Error handling for the serial port
port.on("error", (err: Error) => {
  console.error("Serial Port Error:", err);
});

// Log a message when the serial port opens successfully
port.on("open", () => {
  console.log("Serial port opened successfully");
});

// Error handling for the parser
parser.on("error", (err: Error) => {
  console.error("Parser Error:", err);
});

// Global error handler for uncaught exceptions
process.on("uncaughtException", (err: Error) => {
  console.error("Uncaught Exception:", err);
});
