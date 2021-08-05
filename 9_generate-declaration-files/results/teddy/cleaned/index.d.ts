export = Teddy;

declare function Teddy(rows_: Array<any>, opts: Teddy.I__opts): string;
declare namespace Teddy {
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