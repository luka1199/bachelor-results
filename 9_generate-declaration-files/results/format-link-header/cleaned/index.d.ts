export = FormatLinkHeader;

declare function FormatLinkHeader(linkProperty: FormatLinkHeader.I__linkProperty): string;
declare namespace FormatLinkHeader {
	export interface I__linkProperty {
		'rel': string;
		'hreflang': string;
		'content': string;
	}

}