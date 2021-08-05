export = ComputeQuantile;

declare function ComputeQuantile(arr: Array<any> | ComputeQuantile.I__arr, p: number, opts?: ComputeQuantile.I__opts): number;
declare namespace ComputeQuantile {
	export interface I__arr {
		'length': number;
	}

	export interface I__opts {
		'sorted': boolean;
	}

}