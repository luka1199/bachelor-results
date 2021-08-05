export = EsprimaWalk;

declare function EsprimaWalk(ast: EsprimaWalk.I__ast, fn: Function): void;
declare namespace EsprimaWalk {
	export interface I__type {
		'type'?: undefined;
	}

	export interface I__body {
		'0': object;
		'length': number;
	}

	export interface I__ast {
		'type': I__type;
		'body': I__body;
	}

}