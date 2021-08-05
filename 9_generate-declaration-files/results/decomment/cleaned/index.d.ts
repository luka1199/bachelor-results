export = Decomment;

declare function Decomment(actual: number | Array<any> | object | null | string | Date | Buffer | boolean, expected: number | Array<any> | object | null | string | Date | Buffer, opts?: object | Decomment.I__opts | string): boolean;
declare namespace Decomment {
	export interface I__opts {
		'strict'?: boolean;
	}

}