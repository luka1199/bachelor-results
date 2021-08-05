export = ContentDisposition;

declare function ContentDisposition(filename?: string, options?: ContentDisposition.I__options): string;
declare namespace ContentDisposition {
	export interface I__options {
		'type'?: string;
		'fallback'?: boolean | string;
	}

}