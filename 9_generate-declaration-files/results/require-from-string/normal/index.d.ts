export = RequireFromString;

declare function RequireFromString(code: string, filename?: undefined, opts?: undefined): number;
declare function RequireFromString(code: string, filename?: string, opts?: RequireFromString.I__opts): Module;
declare namespace RequireFromString {
	export interface I__opts {
		'appendPaths': Array<any>;
		'prependPaths': Array<any>;
	}

}