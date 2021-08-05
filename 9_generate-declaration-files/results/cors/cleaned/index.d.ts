export = Cors;

declare function Cors(o?: Cors.I__o | Function): Function;
declare namespace Cors {
	export interface I__o {
		'origin'?: Function | boolean | string | RegExp | I__origin;
		'methods'?: Array<any> | I__methods;
		'preflightContinue'?: boolean;
	}

	export interface I__methods {
		'join': Function;
	}

	export interface I__origin {
		'0': RegExp;
		'1': string;
		'length': number;
	}

}