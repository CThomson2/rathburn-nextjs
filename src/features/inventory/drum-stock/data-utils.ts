import { getDb } from "@/database";

export interface DrumRecord {
  drum_id: number;
  material: string;
  date_processed: Date | null;
  status: string;
  location: string | null;
  created_at: Date;
  updated_at: Date;
  order_id: number | null;
}

export interface OrderGroup {
  order_id: number;
  po_number: string | null;
  supplier: string;
  material: string;
  date_ordered: Date | null;
  total_drums: number;
  subRows: DrumRecord[];
}

/**
 * Fetches drum stock data from the database and groups it by order_id
 */
export async function getDrumStockData(): Promise<OrderGroup[]> {
  const db = getDb();

  // Fetch all drums with their related order information
  const drums = await db.new_drums.findMany({
    orderBy: {
      order_id: "desc",
    },
    // Set explicit select to only include fields we need
    select: {
      drum_id: true,
      material: true,
      date_processed: true,
      status: true,
      location: true,
      created_at: true,
      updated_at: true,
      order_id: true,
      orders: {
        select: {
          order_id: true,
          supplier: true,
          material: true,
          date_ordered: true,
          po_number: true,
        },
      },
    },
  });

  // Process the data to group by order_id
  const orderMap = new Map<number, OrderGroup>();

  drums.forEach((drum) => {
    if (!drum.order_id || drum.order_id <= 47) return; // Skip any drums without order_id

    const orderRecord = orderMap.get(drum.order_id);
    const drumRecord: DrumRecord = {
      drum_id: drum.drum_id,
      material: drum.material,
      date_processed: drum.date_processed,
      status: drum.status,
      location: drum.location,
      created_at: drum.created_at,
      updated_at: drum.updated_at,
      order_id: drum.order_id,
    };

    if (orderRecord) {
      // Add to existing order group
      orderRecord.subRows.push(drumRecord);
      orderRecord.total_drums++;
    } else {
      // Create a new order group
      orderMap.set(drum.order_id, {
        order_id: drum.order_id,
        po_number: drum.orders?.po_number || null,
        supplier: drum.orders?.supplier || "Unknown",
        material: drum.material, // Use the material from the first drum in the order
        date_ordered: drum.orders?.date_ordered || null,
        total_drums: 1,
        subRows: [drumRecord],
      });
    }
  });

  // Convert the map to an array
  return Array.from(orderMap.values());
}
