export = StringFormat;

declare function StringFormat(str: string, data: StringFormat.I__data, options?: StringFormat.I__options): string;
declare namespace StringFormat {
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