export = ObjectMerge;

declare function ObjectMerge(object: ObjectMerge.I__object, cb: Function, context?: object): object;
declare namespace ObjectMerge {
	export interface I__object {
		'a': number;
		'b': number | string;
		'f': string;
	}

}