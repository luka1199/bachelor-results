export = Request;

declare function Request(m: Module | Request.I__m, path?: string | Request.I__path, options?: Request.I__options): object;
declare namespace Request {
	export interface I__m {
		'filename': string;
	}

	export interface I__options {
		'extensions'?: Array<any>;
		'recurse'?: boolean;
		'rename'?: Function;
		'visit'?: Function;
	}

	export interface I__path {
		'extensions': Array<any>;
		'recurse'?: boolean;
		'rename'?: undefined;
		'visit'?: undefined;
	}

}