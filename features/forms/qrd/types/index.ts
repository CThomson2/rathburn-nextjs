// export interface QRDForm {
//   distillation_id: string;
//   loading_date: string;
//   start_date: string;
//   still_code: string;
//   volume_in: number;
//   transporter: string;
//   loader: string;
//   operator: string;
//   completion_date: string;
//   volume_in_spec: string;
//   volume_repro: string;
//   created_at: string;
//   updated_at: string;
// }

export interface TopFormType {
  distillation_id: number; // auto generated from DB
  manufacturer: string;
  material: string;
  drum_id: number;
  still_code: string;
  date: string;
  transporter: string; // initials
  loader: string; // initials
  operator: string; // initials
}

export interface BatchFormType {
  grade: "GD" | "HPLC" | "LCMS" | "PTS-DS" | "HPLC S";
  container_size: number;
  container_qty: number;
  batch_code: string;
  po_number: string | "Domestic Stock" | "Export Stock";
  label_count: number;
  labels_destroyed: number;
  labels_remaining: number; // calculated field
  created_at: string; // auto generated
  updated_at: string; // auto generated
}

export interface BottomFormType {
  start_date: string;
  loading_date: string;
  completion_date: string;
  start_temp: number; // ˚C
  cleaning_req: boolean; // checkbox
  vented: boolean; // checkbox
  SOP: boolean; // checkbox
  operator: string; // initials
  second_check: string; // initials
}
