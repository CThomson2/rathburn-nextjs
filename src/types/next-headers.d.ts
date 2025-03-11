// Type definitions for next/headers
declare module "next/headers" {
  export function cookies(): {
    getAll(): Array<{ name: string; value: string }>;
    get(name: string): { name: string; value: string } | undefined;
    delete(name: string): void;
    set(
      name: string,
      value: string,
      options?: {
        expires?: Date;
        maxAge?: number;
        path?: string;
        domain?: string;
        secure?: boolean;
        httpOnly?: boolean;
        sameSite?: "strict" | "lax" | "none";
      }
    ): void;
  };

  export function headers(): {
    entries(): IterableIterator<[string, string]>;
    forEach(callback: (value: string, key: string) => void): void;
    get(name: string): string | null;
    has(name: string): boolean;
  };
}
