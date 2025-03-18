import { NextResponse } from "next/server";
import { getDb, DATABASE_ROUTE_CONFIG } from "@/lib/db-client";
import type { DrumStatus, DrumStatusCount } from "@/features/dashboard/types";

export const GET = async (request: Request) => {
  try {
    const db = getDb();

    const statusData = await db.$queryRaw<
      { status: DrumStatus; drum_counts: number }[]
    >`
      SELECT status, COUNT(status)::integer as drum_counts
      FROM inventory.new_drums
      GROUP BY status;
    `;
    // Shape of data returned into `drumStatusCounts` is:
    // [
    //   { status: 'available', count: 10 },
    //   { status: 'in_use', count: 5 },
    //   { status: 'in_repair', count: 2 },
    //   { status: 'retired', count: 3 },
    // ]

    const statusCounts = statusData.reduce((acc, row) => {
      acc[row.status as DrumStatus] = row.drum_counts as number;
      return acc;
    }, {} as Record<DrumStatus, number>);

    // Convert status keys to use underscores instead of spaces
    const formattedStatusCounts = Object.entries(statusCounts).reduce(
      (acc, [status, count]) => {
        // Replace spaces with underscores in status names
        const formattedStatus = status.replace(/ /g, "_");
        acc[formattedStatus as DrumStatus] = count;
        return acc;
      },
      {} as Record<DrumStatus, number>
    );

    return NextResponse.json(formattedStatusCounts);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
