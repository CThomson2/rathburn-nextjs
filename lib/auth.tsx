import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import { z } from "zod";

import { AuthResponse, User } from "@/types/api/auth";

import { clientApi as api } from "./api-client/client";

// api call definitions for auth (types, schemas, requests):
// these are not part of features as this is a module shared across features

/**
 * Fetches the current authenticated user.
 * @returns {Promise<User>} A promise that resolves to the user data.
 */
export const getUser = async (): Promise<User> => {
  const response = (await api.get("/auth/me")) as { data: User };
  return response.data;
};

const userQueryKey = ["user"];

/**
 * Provides query options for fetching the user.
 * @returns {object} Query options for the user query.
 */
export const getUserQueryOptions = () => {
  return queryOptions({
    queryKey: userQueryKey,
    queryFn: getUser,
  });
};

/**
 * Custom hook to fetch the current user using React Query.
 * @returns {object} The query result for the user.
 */
export const useUser = (): UseQueryResult<User> => {
  const query = useQuery(getUserQueryOptions());
  console.log(`User query result: ${JSON.stringify(query, null, 2)}`);
  return query;
};

/**
 * Custom hook to handle user login.
 * @param {object} params - Parameters for the login hook.
 * @param {function} [params.onSuccess] - Callback function to execute on successful login.
 * @returns {object} The mutation result for the login operation.
 */
export const useLogin = ({ onSuccess }: { onSuccess?: () => void }) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: loginWithEmailAndPassword,
    onSuccess: (data) => {
      queryClient.setQueryData(userQueryKey, data.user);
      onSuccess?.();
    },
    onError: (error) => {
      console.error("Login failed:", error);
      // Error is automatically available via the error property of the returned mutation object
    },
  });
};

/**
 * Custom hook to handle user registration.
 * @param {object} params - Parameters for the registration hook.
 * @param {function} [params.onSuccess] - Callback function to execute on successful registration.
 * @returns {object} The mutation result for the registration operation.
 */
export const useRegister = ({ onSuccess }: { onSuccess?: () => void }) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: registerWithEmailAndPassword,
    onSuccess: (data) => {
      queryClient.setQueryData(userQueryKey, data.user);
      onSuccess?.();
    },
    onError: (error) => {
      console.error("Registration failed:", error);
    },
  });
};

/**
 * Custom hook to handle user logout.
 * @param {object} params - Parameters for the logout hook.
 * @param {function} [params.onSuccess] - Callback function to execute on successful logout.
 * @returns {object} The mutation result for the logout operation.
 */
export const useLogout = ({ onSuccess }: { onSuccess?: () => void }) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: userQueryKey });
      onSuccess?.();
    },
    onError: (error) => {
      console.error("Logout failed:", error);
    },
  });
};

/**
 * Logs out the current user.
 * @returns {Promise<void>} A promise that resolves when the user is logged out.
 */
const logout = (): Promise<void> => {
  return api.post("/auth/logout");
};

/**
 * Schema for validating login input.
 */
export const loginInputSchema = z.object({
  email: z.string().min(1, "Required").email("Invalid email"),
  password: z.string().min(5, "Required"),
});

export type LoginInput = z.infer<typeof loginInputSchema>;

/**
 * Logs in a user with email and password.
 * @param {LoginInput} data - The login input data.
 * @returns {Promise<AuthResponse>} A promise that resolves to the authentication response.
 */
const loginWithEmailAndPassword = (data: LoginInput): Promise<AuthResponse> => {
  return api.post("/auth/login", data);
};

/**
 * Schema for validating registration input.
 */
export const registerInputSchema = z
  .object({
    email: z.string().min(1, "Required").email("Invalid email"),
    firstName: z.string().min(1, "Required"),
    lastName: z.string().min(1, "Required"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      ),
    confirmPassword: z.string().min(1, "Required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterInput = z.infer<typeof registerInputSchema>;

/**
 * Registers a user with email and password.
 * @param {RegisterInput} data - The registration input data.
 * @returns {Promise<AuthResponse>} A promise that resolves to the authentication response.
 */
const registerWithEmailAndPassword = (
  data: RegisterInput
): Promise<AuthResponse> => {
  // Remove the confirmPassword field before sending to API
  const { confirmPassword, ...registerData } = data;
  return api.post("/auth/register", registerData);
};
