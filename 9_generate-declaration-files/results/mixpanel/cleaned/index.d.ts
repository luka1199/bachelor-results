export = Mixpanel;

declare function Mixpanel(args: Array<any> | Mixpanel.I__args, opts: Mixpanel.I__opts): object;
declare namespace Mixpanel {
	export interface I__args {
		'0': string;
		'1': string;
		'2': string;
		'length': number;
	}

	export interface I__opts {
		'unknown'?: undefined;
		'boolean'?: undefined;
		'alias'?: undefined;
		'string'?: undefined;
		'default'?: undefined;
		'stopEarly': boolean;
		'--'?: undefined;
	}

}