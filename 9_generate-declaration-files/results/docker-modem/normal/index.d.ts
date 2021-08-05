export = Modem;

declare class Modem {
	constructor(options: Modem.I__options);
	buildQuerystring(opts: Modem.I__opts): string;
}

declare namespace Modem {
	export interface I__options {
		'sshOptions'?: object;
	}

	export interface I__opts {
		'limit': number;
		'filters': object;
		't': Array<any>;
	}

}