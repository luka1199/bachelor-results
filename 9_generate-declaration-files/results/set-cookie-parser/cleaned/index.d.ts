export = SetCookieParser;

declare function SetCookieParser(input: string | SetCookieParser.I__input | Array<any>, options?: undefined): Array<any>;
declare function SetCookieParser(input: string | SetCookieParser.I__input, options?: object): object;
declare namespace SetCookieParser {
	export interface I__input {
		'headers'?: object | I__headers;
	}

	export interface I__headers {
		'set-cookie'?: Array<any>;
		'sEt-CookIe': Array<any>;
		'[object Object]'?: undefined;
	}

}