import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Clone the request headers
  const requestHeaders = new Headers(request.headers);

  // Add the full URL to the headers to access query parameters in layouts
  requestHeaders.set("x-url", request.url);

  // Create new response with the modified headers
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// Only run middleware on mobile routes
export const config = {
  matcher: ["/mobile/:path*"],
};
