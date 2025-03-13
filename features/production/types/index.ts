export interface ScheduleType {
  schedule_id: number;
  schedule_name: string;
  schedule_status: string;
  date: string;
  employees: string[];
  distillations: DistillationType[];
  site: "NEW" | "OLD";
  created_at: string;
  updated_at: string;
}

export interface DistillationType {
  distillation_id: number;
  solvent: string;
  description: string;
  quantity: number;
  still_code: string;
  updated_at: string;
  details: string[];
}

// export interface ProductionDetailsType {
//   details: string;
// }
