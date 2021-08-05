export = StaticEval;

declare function StaticEval(ast: object, vars?: StaticEval.I__vars): Array<any>;
declare function StaticEval(ast: object, vars?: object): void;
declare namespace StaticEval {
	export interface I__x {
		'y': number;
	}

	export interface I__obj {
		'x': I__x;
	}

	export interface I__vars {
		'n': boolean | number;
		'foo': Function;
		'obj': I__obj;
		'beep': I__beep | object;
	}

	export interface I__beep {
		'boop': Function;
	}

}