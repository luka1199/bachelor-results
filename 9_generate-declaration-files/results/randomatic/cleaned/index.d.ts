export = Randomatic;

declare function Randomatic(pattern: number | string, length?: number | Randomatic.I__length, options?: Randomatic.I__options): string;
declare namespace Randomatic {
	export interface I__chars {
		'length': number;
	}

	export interface I__length {
		'chars': I__chars;
		'exclude'?: undefined;
	}

	export interface I__options {
		'chars': string;
		'exclude'?: string | Array<any>;
	}

}