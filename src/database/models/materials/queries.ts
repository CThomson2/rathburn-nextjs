import { withDatabase } from "../..";
import {
  MaterialQueryParams,
  MaterialsResponse,
  Material,
} from "@/types/models";
import { formatDates } from "@/utils/formatters/data";

export const queries = {
  getMaterials: async ({
    page = 1,
    limit = 50,
    sortField = "id",
    sortOrder = "asc",
    chemicalGroup,
  }: MaterialQueryParams): Promise<MaterialsResponse> => {
    const offset = (page - 1) * limit;

    return withDatabase(async (db) => {
      // Build where clause
      const where = chemicalGroup?.length
        ? { chemical_group: { in: chemicalGroup } }
        : {};

      // Get the total number of materials
      const total = await db.raw_materials.count({ where });

      // Get the paginated data
      const rows = await db.raw_materials.findMany({
        where,
        orderBy: {
          [sortField]: sortOrder,
        },
        skip: offset,
        take: limit,
      });

      // Transform to our domain type
      const materials = rows.map((row) => {
        // Extend with any additional computed fields
        const material: Material = {
          ...row,
          chemical_group_name: row.chemical_group || "Unknown",
        };
        return material;
      });

      return { materials, total };
    });
  },

  getMaterialById: async (id: number): Promise<Material | null> => {
    return withDatabase(async (db) => {
      const material = await db.raw_materials.findUnique({
        where: { id },
      });

      if (!material) return null;

      // Extend with any computed fields
      return {
        ...material,
        chemical_group_name: material.chemical_group || "Unknown",
      };
    });
  },
};
