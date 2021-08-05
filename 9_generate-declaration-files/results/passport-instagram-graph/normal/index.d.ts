export = Strategy;

declare class Strategy {
	constructor(options: Strategy.I__options,verify: Function);
	userProfile(accessToken: string, done: Function): void;
}

declare namespace Strategy {
	export interface I__customHeaders {
		'User-Agent'?: string;
	}

	export interface I__options {
		'authorizationURL'?: undefined;
		'tokenURL'?: undefined;
		'scopeSeparator'?: undefined;
		'customHeaders'?: I__customHeaders | object;
		'userAgent'?: string;
		'name'?: undefined;
		'userProfileURL'?: string;
		'userEmailURL'?: string;
		'allRawEmails'?: boolean;
	}

}