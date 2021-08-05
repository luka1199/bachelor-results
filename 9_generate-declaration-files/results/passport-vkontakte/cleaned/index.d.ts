export interface I__options {
	'authorizationURL'?: undefined;
	'tokenURL'?: undefined;
	'scopeSeparator'?: undefined;
	'lang'?: undefined;
	'photoSize'?: undefined;
	'profileURL'?: undefined;
	'profileFields'?: Array<any>;
	'apiVersion'?: string;
}

export class Strategy {
	constructor(options: I__options,verify: Function);
	userProfile(accessToken: string, done: Function): void;
	authenticate(): void;
}

