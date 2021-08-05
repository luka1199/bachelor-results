export = Creditcardutils;

declare function Creditcardutils(o?: Creditcardutils.I__o | Function): Function;
declare namespace Creditcardutils {
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