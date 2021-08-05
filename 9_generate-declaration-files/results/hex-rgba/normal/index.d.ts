export = HexRgba;

declare function HexRgba(startCoordinates: object, endCoordinates: object, options: HexRgba.I__options): number;
declare function HexRgba(startCoordinates: Array<any>, endCoordinates: Array<any>, options: HexRgba.I__options): number | boolean;
declare namespace HexRgba {
	export interface I__options {
		'unit'?: string;
		'format'?: string;
		'threshold'?: number;
	}

}