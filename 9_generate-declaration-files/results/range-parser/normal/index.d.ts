export = RangeParser;

declare function RangeParser(size: number, str: string, options?: undefined): number | Array<any>;
declare function RangeParser(size: number, str: string, options?: RangeParser.I__options): Array<any>;
declare namespace RangeParser {
	export interface I__options {
		'combine': boolean;
	}

}