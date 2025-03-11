import { User } from "@/types/api/auth";
import { withDatabase } from "@/database";

export type UserInput = {
  email: string;
  firstName: string;
  lastName: string;
  passwordHash: string;
  role?: string;
};

export type UserWithoutPassword = Omit<User, "password">;

export const queries = {
  /**
   * Gets a user by email or id
   */
  getUser: async ({
    email,
    id,
  }: {
    email?: string;
    id?: string;
  } & ({ email: string } | { id: string })): Promise<User | null> => {
    return withDatabase(async (db) => {
      const user = email
        ? await db.users.findUnique({
            where: { email },
          })
        : await db.users.findUnique({
            where: { id },
          });

      if (!user) return null;

      return {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        role: user.role as "ADMIN" | "USER",
        createdAt: user.created_at.getTime(),
      };
    });
  },

  /**
   * Finds a user by email
   */
  findUserByEmail: async ({
    email,
  }: {
    email: string;
  }): Promise<UserWithoutPassword | null> => {
    return withDatabase(async (db) => {
      const user = await db.users.findUnique({
        where: { email },
        select: {
          id: true,
          email: true,
          first_name: true,
          last_name: true,
          role: true,
          created_at: true,
          updated_at: true,
        },
      });

      if (!user) return null;

      return {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        role: user.role as "ADMIN" | "USER",
        createdAt: user.created_at.getTime(),
      };
    });
  },

  /**
   * Finds a user by ID
   */
  findUserById: async ({
    id,
  }: {
    id: string;
  }): Promise<UserWithoutPassword | null> => {
    return withDatabase(async (db) => {
      const user = await db.users.findUnique({
        where: { id },
        select: {
          id: true,
          email: true,
          first_name: true,
          last_name: true,
          role: true,
          created_at: true,
          updated_at: true,
        },
      });

      if (!user) return null;

      return {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        role: user.role as "ADMIN" | "USER",
        createdAt: user.created_at?.getTime() ?? null,
      };
    });
  },

  /**
   * Finds a user with password by email
   */
  findUserWithPasswordByEmail: async (
    email: string
  ): Promise<{
    id: string;
    email: string;
    password_hash: string;
    role: string;
  } | null> => {
    return withDatabase(async (db) => {
      const user = await db.users.findUnique({
        where: { email },
        select: {
          id: true,
          email: true,
          password_hash: true,
          role: true,
        },
      });

      if (!user) return null;

      return {
        id: user.id,
        email: user.email,
        password_hash: user.password_hash,
        role: user.role,
      };
    });
  },

  /**
   * Creates a new user
   */
  createUser: async (userData: UserInput): Promise<UserWithoutPassword> => {
    return withDatabase(async (db) => {
      const user = await db.users.create({
        data: {
          email: userData.email,
          first_name: userData.firstName,
          last_name: userData.lastName,
          password_hash: userData.passwordHash,
          role: userData.role || "USER",
        },
        select: {
          id: true,
          email: true,
          first_name: true,
          last_name: true,
          role: true,
          created_at: true,
        },
      });

      return {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        role: user.role as "ADMIN" | "USER",
        createdAt: user.created_at.getTime(),
      };
    });
  },

  /**
   * Counts total users
   */
  getUserCount: async (): Promise<number> => {
    return withDatabase(async (db) => {
      return db.users.count();
    });
  },

  /**
   * Creates a new session
   */
  createSession: async (
    userId: string,
    token: string,
    userAgent?: string,
    ipAddress?: string
  ): Promise<void> => {
    return withDatabase(async (db) => {
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 7); // 7 days from now

      await db.sessions.create({
        data: {
          user_id: userId,
          token,
          expires_at: expiresAt,
          user_agent: userAgent,
          ip_address: ipAddress,
        },
      });
    });
  },

  /**
   * Invalidates a session by token
   */
  invalidateSession: async (token: string): Promise<void> => {
    return withDatabase(async (db) => {
      await db.sessions.deleteMany({
        where: { token },
      });
    });
  },

  /**
   * Finds a session by token
   */
  findSessionByToken: async (
    token: string
  ): Promise<{ user_id: string; expires_at: Date } | null> => {
    return withDatabase(async (db) => {
      const session = await db.sessions.findFirst({
        where: {
          token,
          expires_at: { gt: new Date() }, // Only return non-expired sessions
        },
        select: {
          user_id: true,
          expires_at: true,
        },
      });

      return session;
    });
  },

  /**
   * Cleans up expired sessions
   */
  cleanupExpiredSessions: async (): Promise<number> => {
    return withDatabase(async (db) => {
      const result = await db.sessions.deleteMany({
        where: {
          expires_at: { lt: new Date() },
        },
      });

      return result.count;
    });
  },
};

// Export functions that use the queries
export async function findUserByEmail(
  email: string
): Promise<UserWithoutPassword | null> {
  return queries.findUserByEmail({ email });
}

export async function findUserById(
  id: string
): Promise<UserWithoutPassword | null> {
  return queries.findUserById({ id });
}

export async function findUserWithPasswordByEmail(email: string): Promise<{
  id: string;
  email: string;
  password_hash: string;
  role: string;
} | null> {
  return queries.findUserWithPasswordByEmail(email);
}

export async function createUser(
  userData: UserInput
): Promise<UserWithoutPassword> {
  return queries.createUser(userData);
}

export async function getUserCount(): Promise<number> {
  return queries.getUserCount();
}

export async function createSession(
  userId: string,
  token: string,
  userAgent?: string,
  ipAddress?: string
): Promise<void> {
  return queries.createSession(userId, token, userAgent, ipAddress);
}

export async function invalidateSession(token: string): Promise<void> {
  return queries.invalidateSession(token);
}

export async function findSessionByToken(
  token: string
): Promise<{ user_id: string; expires_at: Date } | null> {
  return queries.findSessionByToken(token);
}

export async function cleanupExpiredSessions(): Promise<number> {
  return queries.cleanupExpiredSessions();
}
