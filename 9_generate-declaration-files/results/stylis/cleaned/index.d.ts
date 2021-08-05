export = Stylis;

declare function Stylis(options: Stylis.I__options, callback: Function): void;
declare namespace Stylis {
	export interface I__source {
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
		'10'?: string;
		'11'?: string;
		'12': string;
		'13': string;
		'14'?: string;
		'15'?: string;
		'16': string;
		'17': string;
		'18': string;
		'19': string;
		'20': string;
		'21': string;
		'22': string;
		'23': string;
		'24': string;
		'25': string;
		'26': string;
		'27': string;
		'28': string;
		'29': string;
		'30': string;
		'31': string;
		'32': string;
		'33': string;
		'34': string;
		'35': string;
		'36': string;
		'37': string;
		'38': string;
		'39': string;
		'40': string;
		'41': string;
		'42': string;
		'43': string;
		'44': string;
		'45': string;
		'46': string;
		'47': string;
		'48': string;
		'49': string;
		'50': string;
		'51': string;
		'52': string;
		'53': string;
		'54': string;
		'55': string;
		'length': number;
	}

	export interface I__options {
		'source': I__source | string;
		'target': string | I__target | Array<any>;
		'comments'?: string;
		'strings'?: string;
		'functionNames'?: string;
		'functionArguments'?: string;
		'parentheticals'?: string;
		'once'?: boolean;
	}

	export interface I__0 {
		'length'?: number;
	}

	export interface I__1 {
		'length'?: number;
	}

	export interface I__target {
		'0': I__0;
		'1': I__1;
		'2': I__2;
		'length': number;
	}

	export interface I__2 {
		'length'?: undefined;
	}

}