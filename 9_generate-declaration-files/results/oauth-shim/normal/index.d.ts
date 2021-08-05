export = OauthShim;

declare function OauthShim(object: OauthShim.I__object, cb: Function, context?: object): object;
declare namespace OauthShim {
	export interface I__object {
		'a': number;
		'b': number | string;
		'f': string;
	}

}