export = SqlBricks;

declare namespace SqlBricks {
	export interface I__ctx {
		'_columns': Array<any> | I___columns;
		'_distinct'?: undefined;
		'_into'?: undefined;
		'_where'?: undefined;
		'_groupBy'?: undefined;
		'_having'?: undefined;
		'_orderBy'?: undefined;
		'_forUpdate'?: undefined;
		'test': boolean;
		'val': string;
		'val2': string;
		'anotherThing': boolean;
		'oneThing': boolean;
		'_table'?: undefined;
		'_from'?: undefined;
	}

	export interface I___columns {
		'length': number;
	}

	export interface I__opts {
		'parameterized'?: undefined;
	}

	export class In {
		constructor(col: string,list: Array<any>);
		toString(opts: object): string;
	}

	export class Group {
		constructor(op: string,expressions: Array<any>);
		toString(opts?: undefined): string;
	}

	export class Binary {
		constructor(op: string,col: string,val: string,quantifier?: undefined);
		toString(opts: object): string;
	}

	export function aliasExpansions(aliases: object): void;
	export function joinCriteria(fn?: Function): void;
	export function joinCriteria(fn?: undefined): Function;
	export function templ(str: string, ctx: Select | SqlBricks.I__ctx | object | Insert | Update | Delete, opts?: object): string;
	export function handleColumn(expr?: string, opts?: object): string;
	export function quoteColOrTbl(expr?: string): string;
	export function autoQuote(str?: undefined): void;
	export function autoQuote(str?: string): string;
	export function sqlBricks(col: string, list: Array<any>): In;
	export function and(): Group;
	export function equal(): Binary;
	export function handleValues(vals: Array<any>, opts?: object): Array<any>;
	export function handleValue(val: string, opts?: SqlBricks.I__opts): string;
	export function convert(val: string): string;
	export function _extension(): Function;
}