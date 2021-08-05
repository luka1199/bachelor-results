export = IsBase64;

declare function IsBase64(v: string | boolean, opts?: IsBase64.I__opts): boolean;
declare namespace IsBase64 {
	export interface I__opts {
		'allowEmpty'?: boolean;
		'mimeRequired'?: boolean;
		'allowMime'?: boolean;
		'paddingRequired'?: boolean;
	}

}