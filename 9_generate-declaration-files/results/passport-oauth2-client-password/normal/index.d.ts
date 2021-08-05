export = Strategy;

declare class Strategy {
	constructor(options: Strategy.I__options,verify: Function);
	authenticate(req: Strategy.I__req): void;
	_verify(clientId: string, clientSecret: string, done: Function): void;
}

declare namespace Strategy {
	export interface I__options {
		'passReqToCallback': boolean;
	}

	export interface I__body {
		'client_id'?: string;
		'client_secret'?: string;
	}

	export interface I__req {
		'body'?: object | I__body;
	}

}