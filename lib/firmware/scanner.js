const { SerialPort, ReadlineParser } = require("serialport");
const fs = require("fs");
const axios = require("axios");

// Configuration - you can set this via environment variables or change directly
// Use environment variable or fall back to development URL
const API_ENDPOINT =
  process.env.SCANNER_API_URL || "http://localhost:3000/api/barcodes/scan/drum";

console.log(`Starting serial port setup with API endpoint: ${API_ENDPOINT}`);

// Set up the serial port
const port = new SerialPort({
  path: "/dev/tty.usbmodem__Q21", // Replace with your actual port
  baudRate: 9600,
});

console.log("Serial port created");

const parser = port.pipe(new ReadlineParser({ delimiter: "\r" }));

console.log("Parser created");

// Store scanned data in a variable
let lastScan = null;

async function sendDataToAPI(data) {
  try {
    const payload = {
      barcode: data,
      timestamp: new Date().toISOString(),
    };

    console.log(`Sending to API: ${JSON.stringify(payload)}`);

    const response = await axios.post(API_ENDPOINT, payload);
    console.log(`Successfully sent to API: ${response.status}`);

    if (response.data) {
      console.log(`API Response: ${JSON.stringify(response.data)}`);
    }
  } catch (error) {
    console.error(`Error sending to API (${API_ENDPOINT}):`, error.message);
    if (error.response) {
      console.error(`Response status: ${error.response.status}`);
      console.error(`Response data: ${JSON.stringify(error.response.data)}`);
    }
  }
}

parser.on("data", async (data) => {
  lastScan = data.trim(); // Store the scanned data
  console.log(`Scanned Data (trimmed): ${lastScan}`); // Log it to the console

  // Check if the barcode already conforms to the expected format (XX-HXXXX)
  const isValidFormat =
    /^(\d+)-H(\d+)(?:\s+\d{4}\/\d{2}\/\d{2}\s+\d{2}:\d{2}:\d{2})?$/.test(
      lastScan
    );

  // If the format doesn't match, log a warning but still try to send it
  if (!isValidFormat) {
    console.warn(
      `WARNING: Barcode format does not match expected pattern "XX-HXXXX"`
    );
    console.warn(`The API may reject this scan. Format yours like "52-H1024"`);
  }

  // Send to API
  await sendDataToAPI(lastScan);

  // Append the scanned data to output.txt with a newline
  fs.appendFile("output.txt", lastScan + "\n", (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Successfully wrote to file");
    }
  });
});

// Handle errors
port.on("error", (err) => {
  console.error("Serial Port Error:", err);
});

// Log when port opens successfully
port.on("open", () => {
  console.log("Serial port opened successfully");
});

// Add more error handlers
parser.on("error", (err) => {
  console.error("Parser Error:", err);
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

console.log("Scanner script running. Waiting for barcode scans...");
