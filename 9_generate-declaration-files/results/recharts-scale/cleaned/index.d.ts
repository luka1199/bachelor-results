export = Redlock;

declare class Redlock {
	constructor(clients: Array<any>,options: Redlock.I__options);
}

declare namespace Redlock {
	export interface I__options {
		'driftFactor'?: undefined;
		'retryCount': number;
		'retryDelay': number;
		'retryJitter': number;
		'lockScript'?: undefined;
		'unlockScript'?: undefined;
		'extendScript'?: undefined;
	}

}