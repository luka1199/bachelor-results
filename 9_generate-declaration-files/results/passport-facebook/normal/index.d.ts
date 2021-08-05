export = Strategy;

declare class Strategy {
	constructor(options: Strategy.I__options,verify: Function);
	userProfile(accessToken: string, done: Function): void;
	_convertProfileFields(profileFields: Array<any>): string;
}

declare namespace Strategy {
	export interface I__options {
		'authorizationURL'?: undefined;
		'tokenURL'?: undefined;
		'scopeSeparator'?: undefined;
		'profileURL'?: string;
		'profileFields'?: Array<any>;
		'enableProof'?: boolean;
		'clientSecret': string;
	}

}