export = Jsan;

declare function Jsan(query: object | Array<any> | Jsan.I__query): string;
declare namespace Jsan {
	export interface I__query {
		'length': number;
	}

}