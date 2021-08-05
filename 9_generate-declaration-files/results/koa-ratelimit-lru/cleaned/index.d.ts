export = KoaRatelimitLru;

declare function KoaRatelimitLru(app: Application | KoaRatelimitLru.I__app, mode: string): Application;
declare namespace KoaRatelimitLru {
	export interface I__app {
		'request': object;
	}

}