export = Strategy;

declare class Strategy {
	constructor(options: Function,verify?: undefined);
	_challenge(code?: string, desc?: string, uri?: undefined): string;
	_verify(token: string | Request | Strategy.I__req, done: Function | string): void;
}

declare namespace Strategy {
	export interface I__options {
		'realm'?: string;
		'scope'?: string | Array<any>;
		'passReqToCallback'?: boolean;
	}

	export interface I__headers {
		'x-foo': string;
	}

	export interface I__req {
		'headers': I__headers;
	}

}