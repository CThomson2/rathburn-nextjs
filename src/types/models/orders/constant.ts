export namespace OrderStatus {
  export const PENDING = "pending";
  export const PARTIAL = "partial";
  export const COMPLETE = "complete";

  export type Type = typeof PENDING | typeof PARTIAL | typeof COMPLETE;
}

export namespace OrderETAStatus {
  export const TBC = "tbc";
  export const CONFIRMED = "confirmed";
  export const OVERDUE = "overdue";

  export type Type = typeof TBC | typeof CONFIRMED | typeof OVERDUE;
}
