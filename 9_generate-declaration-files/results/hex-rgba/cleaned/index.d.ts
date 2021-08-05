export = HashSet;

declare class HashSet {
	constructor();
	add(val: number | Array<any> | string): boolean;
	contains(val: string): boolean;
	remove(val: string): boolean;
	isSubSetOf(hashset: HashSet | HashSet.I__hashset): boolean;
	isSuperSetOf(hashset: HashSet | HashSet.I__hashset__1 | HashSet.I__hashset): boolean;
	equals(hashset: HashSet | HashSet.I__hashset__2 | HashSet.I__hashset__3 | HashSet.I__hashset__4): boolean;
	toArray(): Array<any>;
}

declare namespace HashSet {
	export interface I__hashset {
		'length': number;
	}

	export interface I__hashset__1 {
		'length': number;
	}

	export interface I__hashset__2 {
		'length': number;
	}

	export interface I__hashset__3 {
		'length': number;
	}

	export interface I__hashset__4 {
		'length': number;
	}

}