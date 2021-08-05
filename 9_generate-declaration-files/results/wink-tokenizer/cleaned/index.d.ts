export = Pool;

declare class Pool {
	constructor(opts: Pool.I__opts);
}

declare namespace Pool {
	export interface I__opts {
		'max': number;
		'maxWaiting'?: undefined;
	}

}