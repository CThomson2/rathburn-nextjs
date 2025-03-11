import * as z from "zod";
import "dotenv/config";

interface EnvVars {
  API_URL: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DATABASE_URL: string;
}

/**
 * Creates and validates environment variables using Zod schema.
 * Throws an error if validation fails, listing missing or invalid variables.
 *
 * @returns {EnvVars} - Validated environment variables.
 */
function createEnv(): EnvVars {
  const EnvSchema = z.object({
    API_URL: z.string(),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DATABASE_URL: z.string().url(),
  });

  const envVars = {
    API_URL: process.env.API_URL || "",
    DB_USER: process.env.DB_USER || "",
    DB_PASSWORD: process.env.DB_PASSWORD || "",
    DATABASE_URL: process.env.DATABASE_URL || "",
  };

  // Remove console.log for security in production
  if (process.env.NODE_ENV !== "production") {
    console.log("Environment variables loaded (non-production)");
  }

  const parsedEnv = EnvSchema.safeParse(envVars);

  if (!parsedEnv.success) {
    const errorMessage = `Invalid environment variables:
  ${Object.entries(parsedEnv.error.flatten().fieldErrors)
    .map(([k, v]) => `- ${k}: ${v}`)
    .join("\n")}`;

    console.error(errorMessage);

    // In production, we might want to continue with defaults rather than crash
    if (process.env.NODE_ENV === "production") {
      console.warn(
        "Using default values where possible. Some features may not work correctly."
      );
      return envVars as EnvVars;
    }

    throw new Error(errorMessage);
  }

  return parsedEnv.data;
}

export const env = createEnv();
