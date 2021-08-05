export = MultiTypeof;

declare function MultiTypeof(input: string | Array<any> | boolean | object | number, types: Array<any> | MultiTypeof.I__types | string): boolean;
declare namespace MultiTypeof {
	export interface I__types {
		'0': string;
		'1': string;
		'2': string;
		'length': number;
	}

}