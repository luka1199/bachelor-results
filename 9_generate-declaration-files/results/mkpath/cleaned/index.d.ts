export = Mkpath;

declare function Mkpath(args: Array<any> | Mkpath.I__args, opts: Mkpath.I__opts): object;
declare namespace Mkpath {
	export interface I__args {
		'0': string;
		'1': string;
		'2': string;
		'3': string;
		'4': string;
		'length': number;
	}

	export interface I__alias {
		'h': string;
	}

	export interface I__opts {
		'unknown': Function;
		'boolean'?: string | boolean;
		'alias'?: object | I__alias;
		'string'?: string;
		'default'?: object;
		'--'?: boolean;
		'stopEarly'?: undefined;
	}

}