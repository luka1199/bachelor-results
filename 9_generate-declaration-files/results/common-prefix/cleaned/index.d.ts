export = CommonPrefix;

declare function CommonPrefix(strings: Array<any> | CommonPrefix.I__strings): string;
declare namespace CommonPrefix {
	export interface I__strings {
		'0'?: I__0 | string;
		'1': string;
		'2': string;
		'3': string;
		'length': number;
	}

	export interface I__0 {
		'length': number;
	}

}