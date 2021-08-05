export = Strategy;

declare class Strategy {
	constructor(options: Strategy.I__options,verify: Function);
	userProfile(accessToken: string, done: Function): void;
}

declare namespace Strategy {
	export interface I__options {
		'authorizationURL'?: undefined;
		'tokenURL'?: undefined;
		'userProfileURL'?: string;
	}

}