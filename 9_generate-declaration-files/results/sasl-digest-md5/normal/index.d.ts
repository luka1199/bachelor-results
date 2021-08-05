export = Mechanism;

declare class Mechanism {
	constructor(options: Mechanism.I__options);
	challenge(chal: string): Mechanism;
	response(cred: Mechanism.I__cred): string;
	_genNonce(): string;
}

declare namespace Mechanism {
	export interface I__options {
		'genNonce': Function;
	}

	export interface I__cred {
		'serviceType': string;
		'host': string;
		'serviceName'?: undefined;
		'realm'?: undefined;
		'username': string;
		'authzid'?: undefined;
		'password': string;
	}

}