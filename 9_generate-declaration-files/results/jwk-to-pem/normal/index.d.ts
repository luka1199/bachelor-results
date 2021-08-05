export = JwkToPem;

declare function JwkToPem(jwk: JwkToPem.I__jwk, opts?: JwkToPem.I__opts): string;
declare namespace JwkToPem {
	export interface I__jwk {
		'kty': string;
	}

	export interface I__opts {
		'private': boolean;
	}

}