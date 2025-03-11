import { cookies } from "next/headers";
import { sign, verify } from "jsonwebtoken";
import { serialize, SerializeOptions } from "cookie";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { User } from "@/types/api/auth";

export const AUTH_TOKEN_COOKIE_NAME = "insert_react_app_token";

const JWT_SECRET =
  process.env.JWT_SECRET ||
  (() => {
    console.error("JWT_SECRET environment variable is missing");
    throw new Error("JWT_SECRET must be defined for application security");
  })();
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 1 week

/**
 * Retrieves the authentication token from the cookies.
 * Returns an empty string if executed on the client side.
 * @returns {string | undefined} The authentication token or undefined if not found.
 */
export function getAuthTokenCookie(): string | undefined {
  if (typeof window !== "undefined") return "";
  const cookieStore = cookies();
  return cookieStore.get(AUTH_TOKEN_COOKIE_NAME)?.value;
}

/**
 * Checks if the user is logged in by verifying the presence of the authentication token in the cookies.
 * @returns {boolean} True if the user is logged in, false otherwise.
 */
export function checkLoggedIn(): boolean {
  const cookieStore = cookies();
  const isLoggedIn = !!cookieStore.get(AUTH_TOKEN_COOKIE_NAME);
  return isLoggedIn;
}

/**
 * Generates a JWT token for a user
 * @param {object} payload - The data to encode in the token
 * @returns {string} The generated JWT token
 */
export function generateToken(payload: {
  id: string;
  email: string;
  role: string;
}): string {
  return sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

/**
 * Verifies a JWT token
 * @param {string} token - The token to verify
 * @returns {object | null} The decoded token payload or null if invalid
 */
export function verifyToken(
  token: string
): { id: string; email: string; role: string } | null {
  try {
    return verify(token, JWT_SECRET) as {
      id: string;
      email: string;
      role: string;
    };
  } catch (error) {
    return null;
  }
}

/**
 * Sets the auth token cookie in a response
 * @param {NextResponse} response - The Next.js response object
 * @param {string} token - The token to set
 * @returns {NextResponse} The response with the cookie set
 */
export function setAuthCookie(
  response: NextResponse,
  token: string
): NextResponse {
  const cookieOptions: SerializeOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  };

  const cookie = serialize(AUTH_TOKEN_COOKIE_NAME, token, cookieOptions);
  response.headers.set("Set-Cookie", cookie);

  return response;
}

/**
 * Hashes a password using bcrypt
 * @param {string} password - The password to hash
 * @returns {Promise<string>} The hashed password
 */
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

/**
 * Compares a password with a hash to verify it
 * @param {string} password - The plain text password
 * @param {string} hash - The stored password hash
 * @returns {Promise<boolean>} True if the password matches the hash
 */
export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/**
 * Extracts user information from a verified token payload
 * @param payload - The verified token payload
 * @returns User object with only the necessary fields
 */
export function extractUserFromTokenPayload(payload: {
  id: string;
  email: string;
  role: string;
}): Partial<User> {
  return {
    id: payload.id,
    email: payload.email,
    role: payload.role as User["role"],
  };
}
