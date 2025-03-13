export namespace TransactionVariant {
  export const INTAKE = "intake";
  export const SCHEDULED = "scheduled";
  export const LOADED = "loaded";
  export const PROCESSED = "processed";
  export const FAILED = "failed";
  export const REQUEUED = "requeued";
  export const DISPOSED = "disposed";
  export const LOST = "lost";
  export const CANCELLED = "cancelled";

  export type Type =
    | typeof INTAKE
    | typeof SCHEDULED
    | typeof LOADED
    | typeof PROCESSED
    | typeof FAILED
    | typeof REQUEUED
    | typeof DISPOSED
    | typeof LOST
    | typeof CANCELLED;
}

export namespace TransactionSource {
  export const DELIVERY = "delivery";
  export const DRUM = "drum";
  export const REPROCESS = "reprocess";

  export type Type = typeof DELIVERY | typeof DRUM | typeof REPROCESS;
}
