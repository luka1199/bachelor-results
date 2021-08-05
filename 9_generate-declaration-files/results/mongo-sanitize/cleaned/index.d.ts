export = MongoSanitize;

declare function MongoSanitize(v: object | MongoSanitize.I__v): object;
declare function MongoSanitize(v: number): number;
declare function MongoSanitize(v: string): string;
declare function MongoSanitize(v: Array<any>): Array<any>;
declare function MongoSanitize(v: Clazz | MongoSanitize.I__v): Clazz;
declare namespace MongoSanitize {
	export interface I__v {
		'a': number | string;
	}

}