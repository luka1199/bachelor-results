export = Strategy;

declare class Strategy {
	constructor(options: Strategy.I__options,verify: Function);
	userProfile(token: string, tokenSecret: string, params: object | Strategy.I__params, done: Function): void;
}

declare namespace Strategy {
	export interface I__options {
		'requestTokenURL'?: undefined;
		'accessTokenURL'?: undefined;
		'userAuthorizationURL'?: undefined;
		'sessionKey'?: undefined;
		'userProfileURL'?: string;
		'skipExtendedUserProfile'?: boolean;
		'includeEmail'?: boolean;
		'includeStatus'?: boolean;
		'includeEntities'?: boolean;
	}

	export interface I__params {
		'user_id': string;
		'screen_name': string;
	}

}