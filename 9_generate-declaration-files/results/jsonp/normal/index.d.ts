export = Jsonp;

declare function Jsonp(obj: Buffer | object | Array<any>, options: Jsonp.I__options): string;
declare namespace Jsonp {
	export interface I__options {
		'xmlHeader'?: undefined;
		'docType'?: undefined;
		'prettyPrint'?: undefined;
	}

}