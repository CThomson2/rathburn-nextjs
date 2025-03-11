export namespace DrumStatus {
  export const PENDING = "pending";
  export const AVAILABLE = "available";
  export const SCHEDULED = "scheduled";
  export const PROCESSED = "processed";

  export type Type =
    | typeof PENDING
    | typeof AVAILABLE
    | typeof SCHEDULED
    | typeof PROCESSED;
}

export namespace DrumLocation {
  export const NEW_SITE = "new-site";
  export const OLD_SITE = "old-site";

  export type Type = typeof NEW_SITE | typeof OLD_SITE;
}
