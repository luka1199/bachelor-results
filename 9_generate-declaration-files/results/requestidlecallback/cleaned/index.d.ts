export = Requestidlecallback;

declare function Requestidlecallback(options: Requestidlecallback.I__options): object;
declare namespace Requestidlecallback {
	export interface I__options {
		'dirname': string;
		'excludeDirs'?: RegExp;
		'filter'?: RegExp;
		'recursive'?: boolean;
		'resolve'?: Function;
		'map'?: Function;
	}

}