export = ObjectRefs;

declare function ObjectRefs(object: ObjectRefs.I__object, cb: Function, context?: object): object;
declare namespace ObjectRefs {
	export interface I__object {
		'a': number;
		'b': number | string;
		'f': string;
	}

}