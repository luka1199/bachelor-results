export = HostValidation;

declare function HostValidation(config: HostValidation.I__config): Function;
declare namespace HostValidation {
	export interface I__config {
		'referrers'?: Array<any>;
		'hosts'?: Array<any>;
		'referers'?: Array<any>;
		'mode'?: string;
		'fail'?: Function;
	}

}