export = StringNaturalCompare;

declare function StringNaturalCompare(a: string, b: string, opts?: StringNaturalCompare.I__opts): number;
declare namespace StringNaturalCompare {
	export interface I__opts {
		'caseInsensitive'?: boolean;
		'alphabet'?: string | I__alphabet;
	}

	export interface I__alphabet {
		'length': number;
	}

}