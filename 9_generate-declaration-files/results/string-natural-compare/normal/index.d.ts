export = StringNaturalCompare;

declare function StringNaturalCompare(str: string, data: StringNaturalCompare.I__data, options?: StringNaturalCompare.I__options): string;
declare namespace StringNaturalCompare {
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