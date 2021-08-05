export = RequireAll;

declare function RequireAll(options: RequireAll.I__options): object;
declare namespace RequireAll {
	export interface I__options {
		'dirname': string;
		'excludeDirs'?: RegExp;
		'filter'?: RegExp;
		'recursive'?: boolean;
		'resolve'?: Function;
		'map'?: Function;
	}

}