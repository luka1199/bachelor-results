export = InstagramTokenStrategy;

declare class InstagramTokenStrategy {
	constructor(options: InstagramTokenStrategy.I__options,verify: Function);
	_loadUserProfile(): void;
	(accessToken: string, done: Function): void;
	_verify(accessToken: string | Request, refreshToken: string, profile: object | string, next: Function | object): void;
}

declare namespace InstagramTokenStrategy {
	export interface I__options {
		'authorizationURL'?: undefined;
		'tokenURL'?: undefined;
		'profileURL'?: string;
		'passReqToCallback'?: boolean;
	}

}