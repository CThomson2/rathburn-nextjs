import { NextResponse, NextRequest } from "next/server";

type ApiResponseData<T> = {
  data?: T;
  error?: string;
  status: number;
  message?: string;
};

/**
 * Creates a standardized success response for API routes
 *
 * @param data The data to return in the response
 * @param status HTTP status code (defaults to 200)
 * @param message Optional success message
 */
export function apiSuccess<T>(data: T, status: number = 200, message?: string) {
  const responseBody: ApiResponseData<T> = {
    data,
    status,
  };

  if (message) {
    responseBody.message = message;
  }

  return NextResponse.json(responseBody, { status });
}

/**
 * Creates a standardized error response for API routes
 *
 * @param error Error message or Error object
 * @param status HTTP status code (defaults to 500)
 */
export function apiError(error: string | Error, status: number = 500) {
  const errorMessage = error instanceof Error ? error.message : error;

  return NextResponse.json(
    {
      error: errorMessage,
      status,
    },
    { status }
  );
}

/**
 * Wraps an API handler function with error handling
 *
 * @param handler The API handler function to wrap
 */
export function withErrorHandling<T>(
  handler: (req: NextRequest) => Promise<T>
) {
  return async (req: NextRequest) => {
    try {
      return await handler(req);
    } catch (error) {
      console.error("API error:", error);
      return apiError(
        error instanceof Error ? error : "Unknown error occurred"
      );
    }
  };
}
