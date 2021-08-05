export = Strategy;

declare class Strategy {
	constructor(options: Function,verify?: undefined);
	_verify(username: string | Request | Strategy.I__req, password: string, done: Function | string): void;
}

declare namespace Strategy {
	export interface I__options {
		'usernameField'?: string;
		'passwordField'?: string;
		'passReqToCallback'?: boolean;
	}

	export interface I__headers {
		'x-foo': string;
	}

	export interface I__req {
		'headers': I__headers;
	}

}