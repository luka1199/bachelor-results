export = BufferToStream;

declare function BufferToStream(buf: string | Buffer | BufferToStream.I__buf, chunkSize?: undefined): Readable;
declare namespace BufferToStream {
	export interface I__buf {
		'length': number;
	}

}