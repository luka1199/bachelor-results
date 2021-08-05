export = PickWeight;

declare function PickWeight(arr: Array<any> | PickWeight.I__arr, weights: Array<any> | PickWeight.I__weights): string;
declare namespace PickWeight {
	export interface I__arr {
		'0': string;
		'1': string;
		'2': string;
		'3': string;
		'length': number;
	}

	export interface I__weights {
		'0': number;
		'1': number;
		'2': number;
		'3': number;
		'length': number;
	}

}