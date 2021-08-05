export = Strategy;

declare class Strategy {
	constructor(options: Function,verify?: undefined);
	_verify(token: string | Request | Strategy.I__req, done: Function | string): void;
}

declare namespace Strategy {
	export interface I__tokenFields {
		'0': string;
	}

	export interface I__options {
		'tokenFields'?: I__tokenFields;
		'headerFields'?: undefined;
		'passReqToCallback'?: boolean;
	}

	export interface I__headers {
		'x-foo': string;
	}

	export interface I__req {
		'headers': I__headers;
	}

}