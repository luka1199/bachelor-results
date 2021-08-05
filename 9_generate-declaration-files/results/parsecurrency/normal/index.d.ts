export = Authenticator;

declare class Authenticator {
	constructor();
	authorize(strategy: string, options?: undefined, callback?: undefined): Function;
	deserializeUser(fn: Function, req?: undefined, done?: undefined): number;
	deserializeUser(fn: object, req?: Function | object, done?: Function): void;
	unuse(name: string): Authenticator;
	serializeUser(fn: Function, req?: undefined, done?: undefined): number;
	serializeUser(fn: object, req?: Function | object, done?: Function): void;
	transformAuthInfo(fn: Function, req?: undefined, done?: undefined): number;
	transformAuthInfo(fn: object | string, req?: Request | Function | object, done?: Function): void;
	initialize(options?: Authenticator.I__options): Function;
	authenticate(strategy: string | Strategy, options?: undefined, callback?: undefined): Function;
	_strategy(name: string): Strategy | SessionStrategy | BasicStrategy | NoChallengeStrategy | DigestStrategy | BearerStrategy | StrategyA | StrategyB | void;
	session(options?: undefined): Function;
}

declare namespace Authenticator {
	export interface I__options {
		'userProperty': string;
	}

}