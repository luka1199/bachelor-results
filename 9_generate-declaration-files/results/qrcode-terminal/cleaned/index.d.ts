export = QrcodeTerminal;

declare function QrcodeTerminal(pattern: number | string, length?: number | QrcodeTerminal.I__length, options?: QrcodeTerminal.I__options): string;
declare namespace QrcodeTerminal {
	export interface I__chars {
		'length': number;
	}

	export interface I__length {
		'chars': I__chars;
		'exclude'?: undefined;
	}

	export interface I__options {
		'chars': string;
		'exclude'?: string | Array<any>;
	}

}