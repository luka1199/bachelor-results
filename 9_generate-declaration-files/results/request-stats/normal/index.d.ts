export = RequestStats;

declare function RequestStats(m: Module | RequestStats.I__m, path?: string | RequestStats.I__path, options?: RequestStats.I__options): object;
declare namespace RequestStats {
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