import { NextResponse } from "next/server";

/**
 * Higher-order function that wraps an API handler with error handling.
 * Catches any errors thrown by the handler and returns a 500 status with an error message.
 *
 * @param {Function} handler - The API handler function to wrap.
 */
export function withErrorHandler(
  handler: (req: Request) => Promise<NextResponse>
) {
  return async (req: Request): Promise<NextResponse> => {
    try {
      return await handler(req);
    } catch (error: any) {
      console.error("API Error:", error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  };
}
