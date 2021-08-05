export interface I__values {
	'orientation': string;
	'scan': string;
	'width'?: number | string;
	'height': string | number;
	'resolution'?: number | string;
	'aspect-ratio'?: string | number;
	'grid': number;
	'color': number;
	'color-index': number;
	'monochrome': number | string;
	'type'?: string;
}

export function match(mediaQuery: string, values: I__values | object): boolean;
