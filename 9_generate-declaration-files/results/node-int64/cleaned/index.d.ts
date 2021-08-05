export = Int64;

declare class Int64 {
	constructor(a1: number,a2: number);
	toBuffer(rawBuffer?: undefined): Buffer;
	copy(targetBuffer: Buffer, targetOffset?: undefined): void;
	toOctetString(sep?: undefined): string;
	toNumber(allowImprecise: boolean): number;
	_2scomp(): void;
	valueOf(): number;
	compare(other:  | Int64.I__other): number;
	equals(other: ): boolean;
}

declare namespace Int64 {
	export interface I__buffer {
		'0': number;
		'1': number;
		'2': number;
		'3': number;
		'4': number;
		'5': number;
		'6': number;
		'7': number;
	}

	export interface I__other {
		'buffer': I__buffer | Buffer;
		'offset': number;
	}

}