export = ObjectJoiner;

declare function ObjectJoiner(object: ObjectJoiner.I__object, cb: Function, context?: object): object;
declare namespace ObjectJoiner {
	export interface I__object {
		'a': number;
		'b': number | string;
		'f': string;
	}

}