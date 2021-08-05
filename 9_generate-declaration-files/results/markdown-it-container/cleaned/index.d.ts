export interface I__opts {
	'domains'?: Array<any> | I__domains;
	'secondLevelDomains'?: Array<any>;
	'topLevelDomains'?: Array<any>;
	'distanceFunction'?: Function;
	'suggested'?: Function;
	'empty'?: Function;
	'email': string;
}

export interface I__0 {
	'length': number;
}

export interface I__1 {
	'length': number;
}

export interface I__2 {
	'length': number;
}

export interface I__3 {
	'length': number;
}

export interface I__4 {
	'length': number;
}

export interface I__5 {
	'length': number;
}

export interface I__domains {
	'0': string | I__0;
	'1': string | I__1;
	'2': string | I__2;
	'3': string | I__3;
	'4': string | I__4;
	'5': string | I__5;
	'length': number;
}

export function run(opts: I__opts): void | object;
