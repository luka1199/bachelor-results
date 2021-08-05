export = StreamToPromise;

declare function StreamToPromise(str: string, data: StreamToPromise.I__data, options?: StreamToPromise.I__options): string;
declare namespace StreamToPromise {
	export interface I__data {
		'adjective': string;
		'type': object;
		'a': number;
		'b': number;
	}

	export interface I__options {
		'before'?: string;
		'after'?: string;
		'escape'?: string;
		'clean'?: undefined;
	}

}