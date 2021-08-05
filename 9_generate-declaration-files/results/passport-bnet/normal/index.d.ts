export = PassportBnet;

declare function PassportBnet(options: PassportBnet.I__options, verify: Function): Strategy;
declare namespace PassportBnet {
	export interface I__options {
		'region'?: string;
		'authorizationURL'?: undefined;
		'tokenURL'?: undefined;
		'scopeSeparator'?: undefined;
		'customHeaders'?: undefined;
		'clientSecret': string;
		'userURL'?: undefined;
	}

}