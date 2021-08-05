export = SquareConnect;

declare function SquareConnect(str: string, data: SquareConnect.I__data, options?: SquareConnect.I__options): string;
declare namespace SquareConnect {
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