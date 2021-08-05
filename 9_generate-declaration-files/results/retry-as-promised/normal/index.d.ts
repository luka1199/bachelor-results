export = RetryAsPromised;

declare function RetryAsPromised(callback: Function | RetryAsPromised.I__callback, options: RetryAsPromised.I__options | number): Promise;
declare namespace RetryAsPromised {
	export interface I__options {
		'$current'?: number;
		'max': number;
		'timeout'?: number;
		'match'?: Array<any> | string | Function | I__match;
		'backoffBase'?: number;
		'backoffExponent'?: number;
		'report'?: null;
		'name'?: string;
	}

	export interface I__callback {
		'name': string;
	}

	export interface I__match {
		'length': number;
	}

}