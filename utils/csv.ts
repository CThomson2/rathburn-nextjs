/**
 * Parse CSV string into an array of objects
 *
 * @param csvString - The CSV string to parse
 * @returns An array of objects where keys are the CSV headers and values are the row values
 */
export function parseCSV<T = Record<string, any>>(csvString: string): T[] {
  if (!csvString) return [];

  // Split the CSV into lines
  const lines = csvString.split("\n").filter((line) => line.trim());
  if (lines.length === 0) return [];

  // Parse the header row
  const headers = parseCSVRow(lines[0]);

  // Parse each data row
  return lines.slice(1).map((line) => {
    const values = parseCSVRow(line);
    const obj: Record<string, any> = {};

    headers.forEach((header, index) => {
      // Convert string values to appropriate types
      const value = values[index];

      if (value === "NULL" || value === "null") {
        obj[header] = null;
      } else if (value === "true" || value === "false") {
        obj[header] = value === "true";
      } else if (!isNaN(Number(value)) && value.trim() !== "") {
        obj[header] = Number(value);
      } else {
        obj[header] = value;
      }
    });

    return obj as T;
  });
}

/**
 * Parse a single CSV row into an array of values, handling quoted values correctly
 */
function parseCSVRow(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"' && (i === 0 || line[i - 1] !== "\\")) {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  // Add the last field
  if (current) {
    result.push(current.trim());
  }

  // Clean up quoted values
  return result.map((val) => {
    if (val.startsWith('"') && val.endsWith('"')) {
      return val.slice(1, -1);
    }
    return val;
  });
}
