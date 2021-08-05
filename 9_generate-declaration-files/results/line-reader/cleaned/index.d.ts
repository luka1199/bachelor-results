export interface I__options {
	'length': number;
}

export interface I__iteratee {
	'length': number;
}

export function eachLine(filename: string, options: Function | I__options | object, iteratee: Function | I__iteratee, cb?: Function): object;
