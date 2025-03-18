export type DrumStatus =
  | "en_route"
  | "in_stock"
  | "pre_production"
  | "in_production"
  | "scheduled"
  | "processed"
  | "second_process"
  | "disposed"
  | "lost"
  | "unknown";

export interface DrumStatusCount {
  status: DrumStatus;
  count: number;
}

export interface DrumStatusData {
  total: number;
  statuses: {
    [key in DrumStatus]: { count: number; percentage: number };
  };
}
