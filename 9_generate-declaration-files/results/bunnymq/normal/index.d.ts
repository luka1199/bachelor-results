export = Bunnymq;

declare function Bunnymq(a: Buffer | Bunnymq.I__a, b: Buffer | Bunnymq.I__b): Buffer;
declare namespace Bunnymq {
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