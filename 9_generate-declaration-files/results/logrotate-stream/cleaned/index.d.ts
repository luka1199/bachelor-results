export = LRUCache;

declare class LRUCache {
	constructor(options?: undefined);
}

declare namespace LRUCache {
	export interface I__options {
		'max'?: number;
		'length'?: undefined;
		'stale'?: undefined;
		'maxAge'?: number;
		'dispose'?: undefined;
		'noDisposeOnSet'?: undefined;
		'updateAgeOnGet'?: undefined;
	}

}