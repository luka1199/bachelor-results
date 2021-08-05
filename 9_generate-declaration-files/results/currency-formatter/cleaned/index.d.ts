export interface I__options {
	'code'?: string;
	'locale'?: string;
	'symbol'?: string;
	'decimal'?: string;
	'thousand'?: string;
	'precision'?: number;
	'format'?: string | object;
}

export function format(value: number, options: I__options): string;
