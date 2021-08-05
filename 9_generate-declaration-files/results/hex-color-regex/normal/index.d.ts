export = HexColorRegex;

declare function HexColorRegex(startCoordinates: object, endCoordinates: object, options: HexColorRegex.I__options): number;
declare function HexColorRegex(startCoordinates: Array<any>, endCoordinates: Array<any>, options: HexColorRegex.I__options): number | boolean;
declare namespace HexColorRegex {
	export interface I__options {
		'unit'?: string;
		'format'?: string;
		'threshold'?: number;
	}

}