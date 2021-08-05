export = Textextensions;

declare function Textextensions(rows_: Array<any>, opts: Textextensions.I__opts): string;
declare namespace Textextensions {
	export interface I__align {
		'0': string;
		'1': string;
	}

	export interface I__opts {
		'hsep'?: undefined;
		'align': I__align;
		'stringLength'?: undefined;
	}

}