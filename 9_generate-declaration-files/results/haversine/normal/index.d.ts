export = Haversine;

declare function Haversine(startCoordinates: object, endCoordinates: object, options: Haversine.I__options): number;
declare function Haversine(startCoordinates: Array<any>, endCoordinates: Array<any>, options: Haversine.I__options): number | boolean;
declare namespace Haversine {
	export interface I__options {
		'unit'?: string;
		'format'?: string;
		'threshold'?: number;
	}

}