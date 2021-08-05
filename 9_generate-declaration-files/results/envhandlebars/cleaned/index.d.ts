export = Envhandlebars;

declare function Envhandlebars(rootEnv?: Envhandlebars.I__rootEnv): Function;
declare namespace Envhandlebars {
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