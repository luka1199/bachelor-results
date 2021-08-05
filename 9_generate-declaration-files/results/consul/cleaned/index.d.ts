export interface I__obj {
	'parameters'?: I__parameters;
	'type': string;
}

export interface I__parameters {
	'charset': string;
	'foo': string;
	'bar': string;
}

export function format(obj: I__obj): string;
