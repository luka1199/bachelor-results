export = SafeRegex;

declare function SafeRegex(re: RegExp | SafeRegex.I__re | string, opts?: undefined): boolean;
declare namespace SafeRegex {
	export interface I__re {
		'source': string;
	}

}