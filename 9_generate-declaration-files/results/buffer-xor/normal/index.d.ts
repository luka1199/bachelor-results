export = BufferXor;

declare function BufferXor(a: Buffer | BufferXor.I__a, b: Buffer | BufferXor.I__b): Buffer;
declare namespace BufferXor {
	export interface I__a {
		'0': number;
		'1': number;
		'2'?: number;
		'length': number;
	}

	export interface I__b {
		'0': number;
		'1': number;
		'2'?: number;
		'length': number;
	}

}