export = PromiseNodeify;

declare function PromiseNodeify(fn: Function | PromiseNodeify.I__fn, options?: PromiseNodeify.I__options): Function;
declare namespace PromiseNodeify {
	export interface I__fn {
		'value': number;
	}

	export interface I__options {
		'resolve'?: string | Function;
		'maxAge'?: number;
		'maxErrorAge'?: number;
	}

}