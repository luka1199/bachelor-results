export = ParsePreferHeader;

declare function ParsePreferHeader(req: ParsePreferHeader.I__req): Url | void;
declare namespace ParsePreferHeader {
	export interface I__req {
		'url'?: string;
		'_parsedUrl'?: I___parsedUrl | Url;
	}

	export interface I___parsedUrl {
		'pathname': string;
		'_token': number;
	}

}