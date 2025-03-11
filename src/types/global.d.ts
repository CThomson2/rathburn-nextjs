import { PrismaClient } from "@prisma/client";

declare global {
  // This makes TypeScript know that prisma exists on the global scope
  var prisma: PrismaClient;
}

export {};
