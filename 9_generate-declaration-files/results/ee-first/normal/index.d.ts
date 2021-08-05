export = EeFirst;

declare function EeFirst(stuff: Array<any> | EeFirst.I__stuff, done: Function): Function;
declare namespace EeFirst {
	export interface I__0 {
		'0': EventEmitter;
		'1': string;
		'2': string;
		'3': string;
		'length': number;
	}

	export interface I__stuff {
		'0': I__0;
		'1': Array<any>;
		'2': Array<any>;
		'length': number;
	}

}