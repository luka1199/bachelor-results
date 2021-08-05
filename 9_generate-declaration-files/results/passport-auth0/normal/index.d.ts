export = Strategy;

declare class Strategy {
	constructor(options: Strategy.I__options,verify: Function);
	authorizationParams(): object;
}

declare namespace Strategy {
	export interface I__options {
		'domain': string;
		'clientID': string;
		'clientSecret': string;
		'callbackURL': string;
	}

}