export interface I__obj {
	'15øC': object;
	'a.b': object;
	'b': object;
	'd': Array<any>;
	'e': Array<any>;
	'a': string;
	'z.d': Array<any>;
	'should': object;
	'is': object;
	'array': Array<any>;
	'object': object;
	'instance': Instance;
	'c': Array<any>;
}

export interface I__path__1 {
	'0': string;
	'length': number;
}

export function get(obj?: object, path: Array<any> | string, defaultValue?: undefined): number | void | string | Array<any> | boolean | null | object | Function | Instance;
export function get(obj?: I__obj, path: Array<any>, defaultValue?: undefined): number | string | void | Array<any> | boolean | null | object;
export function get(obj?: I__obj, path: Array<any> | I__path__1, defaultValue?: undefined): number;
export function get(obj?: I__obj, path: Array<any> | I__path, defaultValue?: undefined): number | string | void;
export function get(obj?: object, path: Array<any> | I__path, defaultValue?: undefined): string | object | void;
export function get(obj?: Array<any>, path: number, defaultValue?: undefined): string | object;
export function get(obj?: object | string | Instance | Obj, path: number | Array<any> | string, defaultValue?: undefined): void;
export function get(obj?: Array<any>, path: Array<any>, defaultValue?: undefined): string | void | Array<any>;
export function get(obj?: object, path: Array<any> | I__path, defaultValue?: null): null;
export function get(obj?: object, path: string, defaultValue?: null): null | object;
export function get(obj?: null, path: string, defaultValue?: string): string;
