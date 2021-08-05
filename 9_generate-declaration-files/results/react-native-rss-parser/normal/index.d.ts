export = ReactNativeRssParser;

declare function ReactNativeRssParser(opts: ReactNativeRssParser.I__opts | object): Recase;
declare namespace ReactNativeRssParser {
	export interface I__exceptions {
		'FOO': string;
		'abcXyz'?: undefined;
		'_abcXyz'?: undefined;
		'__abcXyz'?: undefined;
		'___abcXyz'?: undefined;
		'foo': string;
		'abc_xyz'?: undefined;
		'_abc_xyz'?: undefined;
		'__abc_xyz'?: undefined;
		'___abc_xyz'?: undefined;
	}

	export interface I__opts {
		'exceptions': I__exceptions;
	}

}