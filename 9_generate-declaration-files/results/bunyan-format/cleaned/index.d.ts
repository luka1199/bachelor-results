export = BunyanFormat;

declare function BunyanFormat(rec: BunyanFormat.I__rec, opts: BunyanFormat.I__opts): string;
declare namespace BunyanFormat {
	export interface I__rec {
		'line'?: undefined;
		'level': number;
		'msg': string;
	}

	export interface I__opts {
		'color': boolean;
		'outputMode': string;
	}

}