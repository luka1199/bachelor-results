export = Mechanism;

declare class Mechanism {
	constructor();
	response(cred: Mechanism.I__cred): string;
	challenge(chal?: undefined): Mechanism;
}

declare namespace Mechanism {
	export interface I__cred {
		'authzid'?: string;
		'username': string;
		'password': string;
	}

}