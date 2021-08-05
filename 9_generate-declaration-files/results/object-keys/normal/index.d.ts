export = ObjectKeys;

declare function ObjectKeys(object: ObjectKeys.I__object, cb: Function, context?: object): object;
declare namespace ObjectKeys {
	export interface I__object {
		'a': number;
		'b': number | string;
		'f': string;
	}

}