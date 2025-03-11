/**
 * Formats a date string into a more readable format
 *
 * @param dateString - The date string to format
 * @returns Formatted date string (e.g., "25 Nov, 2024")
 */
export function formatDate(dateString: string): string {
  if (!dateString) return "-";

  const date = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return dateString;
  }

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
}

/**
 * Formats a date object consistently between server and client
 * to avoid hydration errors
 *
 * @param date - Date object or string to format
 * @returns Formatted date string in DD/MM/YYYY format
 */
export function formatDateForTable(date: Date | string | null): string {
  if (!date) return "-";

  // Convert to Date object if it's a string
  const dateObj = typeof date === "string" ? new Date(date) : date;

  // Check if the date is valid
  if (isNaN(dateObj.getTime())) {
    return "-";
  }

  // Use the Intl.DateTimeFormat for consistent formatting
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(dateObj);
}
