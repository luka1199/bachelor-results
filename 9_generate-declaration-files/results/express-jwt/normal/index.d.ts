export = ExpressJwt;

declare function ExpressJwt(options: ExpressJwt.I__options): Function;
declare namespace ExpressJwt {
	export interface I__options {
		'secret': Function | string;
		'algorithms': Array<any>;
		'isRevoked'?: Function;
		'userProperty'?: undefined;
		'requestProperty'?: undefined;
		'resultProperty'?: undefined;
		'credentialsRequired'?: boolean;
		'getToken'?: undefined;
	}

}