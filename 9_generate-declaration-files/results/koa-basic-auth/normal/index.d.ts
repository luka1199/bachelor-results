export = KoaBasicAuth;

declare function KoaBasicAuth(opts: KoaBasicAuth.I__opts): Function;
declare namespace KoaBasicAuth {
	export interface I__opts {
		'name': string;
		'pass': string;
	}

}