export = MinimalBitArray;

declare function MinimalBitArray(args: Array<any> | I__args | string, opts: MinimalBitArray.I__opts): object;
declare namespace MinimalBitArray {
	export interface I__alias {
		'a.b': string;
	}

	export interface I__opts {
		'unknown'?: undefined;
		'boolean'?: undefined;
		'alias'?: object | I__alias;
		'string'?: undefined;
		'default': object | I__default;
		'stopEarly'?: undefined;
		'--'?: undefined;
	}

	export interface I__default {
		'a.b': number;
	}

}