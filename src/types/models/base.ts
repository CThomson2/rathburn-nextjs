/**
 * This file re-exports Prisma type payloads for use across the application.
 * Using these types ensures our model types stay in sync with the database schema.
 */

import { Prisma } from "/prisma/generated/client";

// Re-export Prisma namespace for advanced type operations
export { Prisma };

// Base table types directly from Prisma
export type PrismaNewDrums = Prisma.new_drumsGetPayload<{}>;
export type PrismaReproDrums = Prisma.repro_drumsGetPayload<{}>;
export type PrismaOrders = Prisma.ordersGetPayload<{}>;
export type PrismaTransactions = Prisma.transactionsGetPayload<{}>;
export type PrismaRawMaterials = Prisma.raw_materialsGetPayload<{}>;
export type PrismaProducts = Prisma.productsGetPayload<{}>;
export type PrismaProductPrices = Prisma.product_pricesGetPayload<{}>;
export type PrismaBottleSizes = Prisma.bottle_sizesGetPayload<{}>;
export type PrismaChemicalGroups = Prisma.chemical_groupsGetPayload<{}>;
export type PrismaDeliveries = Prisma.deliveriesGetPayload<{}>;
export type PrismaDistillations = Prisma.distillationsGetPayload<{}>;
export type PrismaBatches = Prisma.batchesGetPayload<{}>;

// Add additional prisma types as needed
