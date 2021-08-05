export = ObjectMap;

declare function ObjectMap(object: ObjectMap.I__object, cb: Function, context?: object): object;
declare namespace ObjectMap {
	export interface I__object {
		'a': number;
		'b': number | string;
		'f': string;
	}

}