export interface I__opts {
	'named': boolean;
	'numeric'?: undefined;
	'special'?: I__special;
}

export interface I__special {
	'<': boolean;
	'>': boolean;
	'''?: undefined;
	'"'?: undefined;
	'&': boolean;
}

export function encode(str: string, opts?: I__opts): string;
