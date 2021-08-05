export = RequireDirectory;

declare function RequireDirectory(m: Module | RequireDirectory.I__m, path?: string | RequireDirectory.I__path, options?: RequireDirectory.I__options): object;
declare namespace RequireDirectory {
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