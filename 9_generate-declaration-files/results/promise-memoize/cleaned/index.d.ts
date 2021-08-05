export = PromiseMemoize;

declare function PromiseMemoize(fn: Function | PromiseMemoize.I__fn, options?: PromiseMemoize.I__options): Function;
declare namespace PromiseMemoize {
	export interface I__fn {
		'value': number;
	}

	export interface I__options {
		'resolve'?: string | Function;
		'maxAge'?: number;
		'maxErrorAge'?: number;
	}

}