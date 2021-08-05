export = Bunnymq;

declare function Bunnymq(buf: string | Buffer | Bunnymq.I__buf, chunkSize?: undefined): Readable;
declare namespace Bunnymq {
	export interface I__buf {
		'length': number;
	}

}