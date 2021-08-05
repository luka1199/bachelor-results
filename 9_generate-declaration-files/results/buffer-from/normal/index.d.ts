export = BufferFrom;

declare function BufferFrom(buf: string | Buffer | BufferFrom.I__buf, chunkSize?: undefined): Readable;
declare namespace BufferFrom {
	export interface I__buf {
		'length': number;
	}

}