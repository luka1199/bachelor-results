export interface I__query {
	'psargs'?: undefined;
	'pid'?: string;
	'command'?: string;
	'arguments'?: string;
	'ppid'?: undefined;
}

export function lookup(query: I__query, callback: Function): void;
