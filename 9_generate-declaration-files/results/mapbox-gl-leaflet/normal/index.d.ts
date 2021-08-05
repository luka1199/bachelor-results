export = LRUCache;

declare class LRUCache {
	constructor(options: number);
}

declare namespace LRUCache {
	export interface I__options {
		'max': number;
		'length'?: undefined;
		'stale'?: undefined;
		'maxAge'?: undefined;
		'dispose'?: undefined;
		'noDisposeOnSet'?: undefined;
		'updateAgeOnGet'?: undefined;
	}

}