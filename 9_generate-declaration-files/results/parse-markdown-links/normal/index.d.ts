export = ParseMarkdownLinks;

declare function ParseMarkdownLinks(req: ParseMarkdownLinks.I__req): Url | void;
declare namespace ParseMarkdownLinks {
	export interface I__req {
		'url'?: string;
		'_parsedUrl'?: I___parsedUrl | Url;
	}

	export interface I___parsedUrl {
		'pathname': string;
		'_token': number;
	}

}