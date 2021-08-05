export interface I__arr {
	'0': string;
	'1': string;
	'2': string;
	'3': string;
	'4': string;
	'5': string;
	'6': string;
	'7': string;
	'8': string;
	'9': string;
	'10': string;
	'11': string;
	'12': string;
	'13': string;
	'14': string;
	'15': string;
	'16': string;
	'17': string;
	'18': string;
	'19': string;
	'20': string;
	'21': string;
	'length': number;
	'-1'?: undefined;
}

export interface I__0 {
	'0': RegExp;
}

export interface I__1 {
	'1'?: undefined;
}

export interface I__rules {
	'0': I__0 | Array<any>;
	'1': I__1 | Array<any>;
	'2': Array<any>;
	'3': Array<any>;
	'4': Array<any>;
	'5': Array<any>;
	'6': Array<any>;
	'length': number;
}

export interface I__str {
	'should': Assertion;
}

export interface I__str__1 {
	'should': Assertion;
}

export interface I__arr__2 {
	'0': string;
	'1': string;
	'2': string;
	'length': number;
}

export function indexOf(arr: Array<any> | I__arr, item: string, from_index?: undefined, compare_func?: undefined): number;
export function pluralize(str: string, plural?: string): string;
export function _apply_rules(str: string, rules: Array<any> | I__rules, skip: Array<any>, override?: string): string;
export function singularize(str: string, singular?: string): string;
export function inflect(str: string | I__str, count: number | string, singular?: string, plural?: string): string;
export function camelize(str: string, low_first_letter?: boolean): string;
export function underscore(str: string | I__str__1, all_upper_case?: boolean): string;
export function humanize(str: string, low_first_letter?: boolean): string;
export function capitalize(str: string): string;
export function dasherize(str: string): string;
export function titleize(str: string): string;
export function demodulize(str: string): string;
export function tableize(str: string): string;
export function classify(str: string): string;
export function foreign_key(str: string, drop_id_ubar?: boolean): string;
export function ordinalize(str: string): string;
export function transform(str: string, arr: Array<any> | I__arr__2 | I__arr): string;
