export = Table;

declare class Table {
	constructor();
	cell(col: string | number, val?: string | number | null, printer?: Function): Table;
	newRow(): Table;
	toString(): string;
	columns(): Array<any>;
	pushDelimeter(cols: Array<any>): Table;
	print(): string;
	printTransposed(opts: Table.I__opts): string;
	sort(cmp: Function | Array<any>): Table;
	total(col: string, opts?: Table.I__opts__1): Table;
	forEachTotal(cb: Function): void;
}

declare namespace Table {
	export interface I__separator {
		'length': number;
	}

	export interface I__opts {
		'separator': I__separator;
		'namePrinter'?: undefined;
	}

	export interface I__opts__1 {
		'reduce': Function;
		'printer': Function;
		'init': number;
	}

}