export = Mechanism;

declare class Mechanism {
	constructor();
	response(cred: Mechanism.I__cred): string;
}

declare namespace Mechanism {
	export interface I__cred {
		'authzid'?: string;
	}

}