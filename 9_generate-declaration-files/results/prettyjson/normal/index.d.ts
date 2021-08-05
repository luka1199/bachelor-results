export = Prettyjson;

declare function Prettyjson(time: Array<any> | number | Prettyjson.I__time | string, smallest?: string | number, digits?: number): string;
declare namespace Prettyjson {
	export interface I__time {
		'length': number;
	}

}