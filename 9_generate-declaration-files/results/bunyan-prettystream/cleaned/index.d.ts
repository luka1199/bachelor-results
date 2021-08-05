export = PrettyStream;

declare class PrettyStream {
	constructor(opts: PrettyStream.I__opts);
	formatRecord(rec: PrettyStream.I__rec): string;
}

declare namespace PrettyStream {
	export interface I__opts {
		'useColor': boolean;
	}

	export interface I__rec {
		'req'?: undefined;
		'res'?: undefined;
		'client_req'?: undefined;
		'client_res'?: undefined;
	}

}