export = Fresh;

declare function Fresh(reqHeaders: Fresh.I__reqHeaders, resHeaders: object | Fresh.I__resHeaders): boolean;
declare namespace Fresh {
	export interface I__reqHeaders {
		'if-modified-since'?: string;
		'if-none-match'?: string;
		'cache-control'?: string;
	}

	export interface I__resHeaders {
		'etag'?: string;
		'last-modified'?: string;
	}

}