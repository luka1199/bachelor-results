export = Mssql;

declare function Mssql(input: string | Array<any> | boolean | object | number, types: Array<any> | Mssql.I__types | string): boolean;
declare namespace Mssql {
	export interface I__types {
		'0': string;
		'1': string;
		'2': string;
		'length': number;
	}

}