export = BitwiseXor;

declare function BitwiseXor(a: Buffer | BitwiseXor.I__a | string, b: Buffer | BitwiseXor.I__b | string): Buffer;
declare namespace BitwiseXor {
	export interface I__a {
		'0': number;
		'1': number;
		'length': number;
	}

	export interface I__b {
		'0': number;
		'1': number;
		'length': number;
	}

}