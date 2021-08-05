export = StringPlaceholder;

declare function StringPlaceholder(str: string, data: StringPlaceholder.I__data, options?: StringPlaceholder.I__options): string;
declare namespace StringPlaceholder {
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