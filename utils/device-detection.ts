// Device detection utility for routing between web and mobile versions

/**
 * Determines if the request is coming from a mobile device
 * @param userAgent - The user agent string from the request headers
 * @returns boolean indicating if the request is from a mobile device
 */
export function isMobileDevice(userAgent: string): boolean {
  // Common mobile device indicators in user agent strings
  const mobileRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i;

  return mobileRegex.test(userAgent);
}

/**
 * Determines if the device is one of our barcode scanners
 * @param userAgent - The user agent string from the request headers
 * @returns boolean indicating if the device is likely one of our barcode scanners
 */
export function isBarcodeScanner(userAgent: string): boolean {
  // Update this regex with specific indicators of your barcode scanner devices
  // This is just a placeholder - you'll need to identify unique patterns in your scanner's user agent
  const scannerRegex = /ScannerDevice|YourScannerModel/i;

  return scannerRegex.test(userAgent);
}

/**
 * Determines if a user should be redirected to the mobile version
 * Can be customized based on your requirements
 */
export function shouldUsesMobileVersion(
  userAgent: string,
  forceRedirect?: boolean
): boolean {
  // Logic to determine if user should be redirected to mobile version
  // You can implement more complex logic here, such as checking for specific device types
  if (forceRedirect !== undefined) return forceRedirect;

  return isMobileDevice(userAgent) || isBarcodeScanner(userAgent);
}
