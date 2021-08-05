export = ExpressLess;

declare function ExpressLess(root: string, options?: ExpressLess.I__options): Function;
declare namespace ExpressLess {
	export interface I__options {
		'cache'?: boolean;
		'compress': boolean;
	}

}