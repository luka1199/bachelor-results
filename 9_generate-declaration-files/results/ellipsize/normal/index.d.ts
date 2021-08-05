export = Ellipsize;

declare function Ellipsize(str?: string | null, max?: number, opts?: Ellipsize.I__opts): string;
declare namespace Ellipsize {
	export interface I__opts {
		'ellipse'?: string;
		'chars'?: Array<any>;
		'max'?: number;
		'truncate'?: boolean | null | string;
	}

}