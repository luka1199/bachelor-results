export = Mechanism;

declare class Mechanism {
	constructor(options: Mechanism.I__options);
	response(cred: object): string;
	_genNonce(): string;
	challenge(chal: string): Mechanism;
}

declare namespace Mechanism {
	export interface I__options {
		'genNonce': Function;
	}

}