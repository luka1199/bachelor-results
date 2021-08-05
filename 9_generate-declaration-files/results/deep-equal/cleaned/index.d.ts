export = DeepEqual;

declare function DeepEqual(actual: number | Array<any> | object | null | string | Date | Buffer | boolean, expected: number | Array<any> | object | null | string | Date | Buffer, opts?: object | DeepEqual.I__opts | string): boolean;
declare namespace DeepEqual {
	export interface I__opts {
		'strict'?: boolean;
	}

}