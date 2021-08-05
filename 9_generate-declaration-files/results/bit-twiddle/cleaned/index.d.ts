export = BitArray;

declare class BitArray {
	constructor(size: number,hex?: undefined);
	toString(): string;
	toArray(): Array<any>;
	size(): number;
	toBinaryString(): string;
	get(index: number): boolean;
	toHexString(): string;
	and(x: BitArray | BitArray.I__x): BitArray;
	set(index: number, value: boolean): BitArray;
	toggle(index: number): BitArray;
	count(): number;
	equals(x: BitArray | BitArray.I__x__2 | BitArray.I__x): boolean;
	copy(): BitArray;
	not(): BitArray;
	or(x: BitArray | BitArray.I__x__4): BitArray;
	xor(x: BitArray | BitArray.I__x__6): BitArray;
}

declare namespace BitArray {
	export interface I__wordArray {
		'0': number;
		'1': number;
	}

	export interface I__x {
		'length': number;
		'wordArray': I__wordArray | Uint32Array;
	}

	export interface I__wordArray__1 {
		'0': number;
		'1': number;
		'2': number;
		'3': number;
		'4': number;
		'5': number;
		'6': number;
	}

	export interface I__x__2 {
		'length': number;
		'wordArray': I__wordArray__1 | Uint32Array;
	}

	export interface I__wordArray__3 {
		'0': number;
	}

	export interface I__x__4 {
		'length': number;
		'wordArray': I__wordArray__3;
	}

	export interface I__wordArray__5 {
		'0': number;
	}

	export interface I__x__6 {
		'length': number;
		'wordArray': I__wordArray__5;
	}

}