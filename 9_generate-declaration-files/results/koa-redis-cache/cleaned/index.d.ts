export = KoaRedisCache;

declare function KoaRedisCache(app: Application | KoaRedisCache.I__app, mode: string): Application;
declare namespace KoaRedisCache {
	export interface I__app {
		'request': object;
	}

}