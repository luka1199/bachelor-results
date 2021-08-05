export = KoaJson;

declare function KoaJson(opts?: KoaJson.I__opts): Function;
declare namespace KoaJson {
	export interface I__opts {
		'param'?: string;
		'pretty': boolean;
		'spaces'?: number;
	}

}