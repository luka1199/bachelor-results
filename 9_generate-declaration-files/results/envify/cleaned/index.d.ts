export = Envify;

declare function Envify(rootEnv?: Envify.I__rootEnv): Function;
declare namespace Envify {
	export interface I__rootEnv {
		'_'?: undefined;
		'LOREM': string;
		'HELLO': string;
		'ZALGO': string;
		'UP': string;
		'UNDEFINED'?: undefined;
		'NOTTHERE'?: undefined;
		'UNTOUCHED': string;
		'DYNAMIC': string;
		'PURGED'?: undefined;
		'argument': string;
	}

}