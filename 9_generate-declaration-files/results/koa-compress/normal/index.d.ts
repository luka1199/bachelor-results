export = KoaCompress;

declare function KoaCompress(opts?: KoaCompress.I__opts): Function;
declare namespace KoaCompress {
	export interface I__opts {
		'param'?: string;
		'pretty': boolean;
		'spaces'?: number;
	}

}