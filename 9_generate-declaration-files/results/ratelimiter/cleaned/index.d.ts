export = Limiter;

declare class Limiter {
	constructor(opts: Limiter.I__opts);
}

declare namespace Limiter {
	export interface I__opts {
		'id': string;
		'db': RedisClient | Redis;
		'max': number;
		'duration': number;
	}

}