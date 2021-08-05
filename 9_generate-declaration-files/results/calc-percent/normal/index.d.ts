export = CalcPercent;

declare function CalcPercent(val: number, total: number, opts?: CalcPercent.I__opts): string;
declare namespace CalcPercent {
	export interface I__opts {
		'decimal'?: number;
		'suffix'?: string;
	}

}