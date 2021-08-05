export = Mri;

declare function Mri(args: Array<any> | Mri.I__args, opts?: undefined): object;
declare function Mri(args: Array<any> | Mri.I__args, opts?: Mri.I__opts): object | boolean;
declare namespace Mri {
	export interface I__args {
		'0': string;
		'1'?: string;
		'2'?: string;
		'3': string;
		'4'?: string;
		'5'?: string;
		'6'?: string;
		'7': string;
		'8': string;
		'9': string;
		'10': string;
		'11': string;
		'12': string;
		'13': string;
	}

	export interface I__string {
		'0': string;
		'1': string;
		'length': number;
	}

	export interface I__boolean {
		'0': string;
		'length': number;
	}

	export interface I__opts {
		'string'?: I__string | Array<any> | string;
		'boolean'?: string | I__boolean | Array<any>;
		'alias'?: object | I__alias;
		'default'?: object | I__default;
		'unknown'?: Function;
	}

	export interface I__default {
		'verbose': boolean;
		'bar': boolean;
		'h': string;
	}

	export interface I__alias {
		'bar': string;
		's': string;
		'str': string;
		'z': string | I__z;
		'h': string;
	}

	export interface I__z {
		'0': string;
		'1': string;
		'length': number;
	}

}