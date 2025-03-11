// database/models/products/queries.ts
import { withDatabase } from "../..";
import { ProductTableRow } from "@/types/models";

const Grade = {
  GD: "GD",
  HPLC: "HPLC",
  LCMS: "LCMS",
  PTS_DS: "PTS_DS",
} as const;

type GradeType = keyof typeof Grade;

export const queries = {
  /**
   * Counts the total number of products, optionally filtered by grade
   * @param grade Optional GRADE enum value to filter products by
   * @returns Promise resolving to the count of products matching the criteria
   *
   * Example SQL generated:
   * SELECT COUNT(*) FROM products WHERE grade = $1
   * Or if no grade provided:
   * SELECT COUNT(*) FROM products
   */
  byGrade: async (grade?: GradeType): Promise<number> => {
    return withDatabase((db) =>
      db.products.count({
        where: grade ? { grade } : undefined,
      })
    );
  },

  /**
   * Fetches all products with their basic information and associated CAS numbers
   * @returns Promise resolving to an array of product table rows
   */
  fetchProducts: async (): Promise<ProductTableRow[]> => {
    return withDatabase(async (db) => {
      const products = await db.products.findMany({
        select: {
          product_id: true,
          name: true,
          sku: true,
          grade: true,
          raw_materials: {
            select: {
              cas_number: true,
            },
          },
        },
      });

      return products.map((product: any) => {
        return {
          ...product,
          cas_number: product.raw_materials?.cas_number ?? "",
        };
      });
    });
  },

  /**
   * Gets counts of products broken down by grade and total
   * Uses a single GROUP BY query for efficiency rather than multiple count queries
   * @returns Object containing total count and count per grade
   *
   * Example SQL generated:
   * SELECT grade, COUNT(*) as _count
   * FROM products
   * GROUP BY grade;
   *
   * And:
   * SELECT COUNT(*) FROM products;
   *
   * Returns object like:
   * {
   *   all: number,    // Total products
   *   GD: number,     // Count of GD grade products
   *   HPLC: number,   // Count of HPLC grade products
   *   LCMS: number,   // Count of LCMS grade products
   *   PTS_DS: number  // Count of PTS-DS grade products
   * }
   */
  getProductCounts: async () => {
    return withDatabase(async (db) => {
      // Fetch all counts in a single query using GroupBy
      const gradeCounts = await db.products.groupBy({
        by: ["grade"],
        _count: true,
        orderBy: {
          grade: "asc",
        },
      });

      const totalCount = await db.products.count();

      return {
        all: totalCount,
        GD:
          gradeCounts.find((count: any) => count.grade === Grade.GD)?._count ??
          0,
        HPLC:
          gradeCounts.find((count: any) => count.grade === Grade.HPLC)
            ?._count ?? 0,
        LCMS:
          gradeCounts.find((count: any) => count.grade === Grade.LCMS)
            ?._count ?? 0,
        PTS_DS:
          gradeCounts.find((count: any) => count.grade === Grade.PTS_DS)
            ?._count ?? 0,
      };
    });
  },
};
