export = UnorderedArrayRemove;

declare function UnorderedArrayRemove(arr: Array<any> | UnorderedArrayRemove.I__arr, i: number): number | void;
declare function UnorderedArrayRemove(arr: Array<any>, i: number): number;
declare namespace UnorderedArrayRemove {
	export interface I__arr {
		'1': number;
		'length': number;
	}

}