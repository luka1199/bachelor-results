export = BufferSplit;

declare function BufferSplit(buf: Buffer | BufferSplit.I__buf, splitBuf: Buffer | BufferSplit.I__splitBuf, includeDelim?: boolean): Array<any>;
declare namespace BufferSplit {
	export interface I__buf {
		'length': number;
	}

	export interface I__splitBuf {
		'length': number;
	}

}