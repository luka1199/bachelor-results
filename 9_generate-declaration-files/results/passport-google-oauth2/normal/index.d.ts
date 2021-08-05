export = Strategy;

declare class Strategy {
	constructor(options: Strategy.I__options,verify: Function);
	authorizationParams(options: Strategy.I__options__1 | Strategy.I__options): object;
	userProfile(accessToken: string, done: Function): void;
}

declare namespace Strategy {
	export interface I__options {
		'authorizationURL'?: undefined;
		'tokenURL'?: undefined;
	}

	export interface I__options__1 {
		'accessType'?: string;
		'approvalPrompt'?: string;
		'prompt'?: string;
		'loginHint'?: string;
		'userID'?: string;
		'hostedDomain'?: string;
		'hd'?: string;
	}

}