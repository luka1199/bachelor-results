export = Jsontoxml;

declare function Jsontoxml(obj: Buffer | object | Array<any>, options: Jsontoxml.I__options): string;
declare namespace Jsontoxml {
	export interface I__options {
		'xmlHeader'?: undefined;
		'docType'?: undefined;
		'prettyPrint'?: undefined;
	}

	export function esc(str: string | number): string;
}