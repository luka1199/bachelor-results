export = BufferHelper;

declare class BufferHelper {
	constructor();
	concat(buffer: Buffer): BufferHelper;
	toBuffer(): Buffer;
	load(stream: ReadStream, callback: Function): void;
}

declare namespace BufferHelper {
}