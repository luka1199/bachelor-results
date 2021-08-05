export = Rename;

declare function Rename(code: string, filename?: undefined, opts?: undefined): number;
declare function Rename(code: string, filename?: string, opts?: Rename.I__opts): Module;
declare namespace Rename {
	export interface I__opts {
		'appendPaths': Array<any>;
		'prependPaths': Array<any>;
	}

}