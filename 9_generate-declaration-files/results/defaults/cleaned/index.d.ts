export = Defaults;

declare function Defaults(options: boolean | Defaults.I__options, defaults: Defaults.I__defaults): object;
declare namespace Defaults {
	export interface I__defaults {
		'a': boolean | Array<any>;
		'b': boolean | object;
	}

	export interface I__options {
		'a'?: boolean | I__a | Array<any>;
		'b'?: boolean | object;
	}

	export interface I__a {
		'length': number;
	}

}