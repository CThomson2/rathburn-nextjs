import { PrismaNewDrums, PrismaReproDrums } from "@/types/models";

/**
 * Interface representing a repro stock item from the CSV data
 * material: string;
    status: string;
    location: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    repro_drum_id: number;
    date_created: Date;
    capacity: number;
    current_volume: number;
    volume_status: string;
    notes: string | null;

 */
export interface ReproStock {
  repro_drum_id: number;
  date_created: string;
  material: string;
  capacity: number;
  current_volume: number;
  created_at: string;
  updated_at: string;
  status: string;
  volume_status: string;
  location: string | null;
  drum_code: string | null;
}

/**
 * DrumStock table will combine properties from PrismaNewDrums and PrismaOrders
 * drums model:
 *  material: string;
    location: string | null;
    status: string;
    drum_id: number;
    date_processed: Date | null;
    created_at: Date;
    updated_at: Date;
    order_id: number | null;
 * orders model 
        material: string;
    supplier: string;
    status: string;
    created_at: Date;
    updated_at: Date;
    order_id: number;
    date_ordered: Date;
    po_number: string | null;
    notes: string | null;
    quantity: number;
    quantity_received: number;
    eta_start: Date | null;
    eta_end: Date | null;
 */
export interface DrumStock {
  // Main table columns (common for all drums within order sub-group)
  order_id: number | null; // not shown in table but used for grouping
  po_number: string | null; // shown as the UI "primary key" for grouped drums (SQL uses order_id for PK)
  material: string;
  supplier: string;
  quantity: number;
  date_ordered: string;
  // Subtable columns for each drum group (grouped by po_number of order)
  drum_id: number;
  status: string;
  date_processed: string | null; // if nul, row formatted to show drum is still in stock
  created_at: string; // not shown in table but used for sorting
  updated_at: string; // not shown in table but used for sorting
  notes: string | null;
}
