export = Hooker;

declare function Hooker(startCoordinates: object, endCoordinates: object, options: Hooker.I__options): number;
declare function Hooker(startCoordinates: Array<any>, endCoordinates: Array<any>, options: Hooker.I__options): number | boolean;
declare namespace Hooker {
	export interface I__options {
		'unit'?: string;
		'format'?: string;
		'threshold'?: number;
	}

}