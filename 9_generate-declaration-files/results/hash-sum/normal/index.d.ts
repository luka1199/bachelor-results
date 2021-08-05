export = HashSum;

declare function HashSum(startCoordinates: object, endCoordinates: object, options: HashSum.I__options): number;
declare function HashSum(startCoordinates: Array<any>, endCoordinates: Array<any>, options: HashSum.I__options): number | boolean;
declare namespace HashSum {
	export interface I__options {
		'unit'?: string;
		'format'?: string;
		'threshold'?: number;
	}

}