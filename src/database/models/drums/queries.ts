import { withDatabase } from "../..";
import type { DrumQueryParams, DrumsResponse, DrumBatch } from "@/types/models";
import type { DrumStatus, DrumLocation } from "@/types/models/drums/constant";

export const queries = {
  getDrums: async ({
    page = 1,
    limit = 50,
    sortField = "drum_id",
    sortOrder = "asc",
    status,
  }: DrumQueryParams): Promise<DrumsResponse> => {
    const offset = (page - 1) * limit;

    return withDatabase(async (db) => {
      // Get the total number of drums
      const total = await db.new_drums.count({
        where: {
          status: { in: status },
        },
      });

      // Get the paginated data
      const rows = await db.new_drums.findMany({
        where: {
          status: { in: status },
        },
        select: {
          drum_id: true,
          material: true,
          status: true,
          location: true,
          date_processed: true,
          created_at: true,
          updated_at: true,
          orders: {
            select: {
              order_id: true,
              supplier: true,
              date_ordered: true,
            },
          },
        },
        orderBy: {
          [sortField]: sortOrder,
        },
        skip: offset,
        take: limit,
      });

      const drums = rows.map(
        (row: any) =>
          ({
            drum_id: row.drum_id,
            material: row.material,
            status: row.status as DrumStatus.Type,
            location: row.location as DrumLocation.Type | null,
            order_id: row.orders?.order_id,
            supplier: row.orders?.supplier,
            date_ordered: row.orders.date_ordered,
            date_processed: row.date_processed,
            created_at: row.created_at,
            updated_at: row.updated_at,
          } as DrumBatch)
      );

      return { drums, total };
    });
  },
};
