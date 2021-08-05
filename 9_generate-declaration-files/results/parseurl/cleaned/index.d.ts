export = Parseurl;

declare function Parseurl(req: Parseurl.I__req): Url | void;
declare namespace Parseurl {
	export interface I__req {
		'url'?: string;
		'_parsedUrl'?: I___parsedUrl | Url;
	}

	export interface I___parsedUrl {
		'pathname': string;
		'_token': number;
	}

}