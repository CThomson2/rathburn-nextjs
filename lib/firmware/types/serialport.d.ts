declare module "serialport" {
  import { EventEmitter } from "events";

  export interface SerialPortOptions {
    path: string;
    baudRate: number;
    dataBits?: number;
    stopBits?: number;
    parity?: "none" | "even" | "odd" | "mark" | "space";
    rtscts?: boolean;
    xon?: boolean;
    xoff?: boolean;
    xany?: boolean;
    autoOpen?: boolean;
    hupcl?: boolean;
    lock?: boolean;
    bufferSize?: number;
    flowControl?: boolean;
  }

  export class SerialPort extends EventEmitter {
    constructor(options: SerialPortOptions);
    open(): Promise<void>;
    close(): Promise<void>;
    write(data: string | Buffer): Promise<void>;
    read(size?: number): Buffer | null;
    pipe<T extends NodeJS.WritableStream>(destination: T): T;
    on(event: string, callback: (...args: any[]) => void): this;
    on(event: "open", callback: () => void): this;
    on(event: "data", callback: (data: Buffer) => void): this;
    on(event: "close", callback: () => void): this;
    on(event: "error", callback: (error: Error) => void): this;
  }

  export interface ParserOptions {
    delimiter?: string | Buffer | number[];
    encoding?: BufferEncoding;
    includeDelimiter?: boolean;
  }

  export class ReadlineParser extends EventEmitter {
    constructor(options?: ParserOptions);
    on(event: string, callback: (...args: any[]) => void): this;
    on(event: "data", callback: (data: string) => void): this;
    on(event: "error", callback: (error: Error) => void): this;
  }
}
