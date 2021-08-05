export = StremioAddonSdk;

declare function StremioAddonSdk(str: string, data: StremioAddonSdk.I__data, options?: StremioAddonSdk.I__options): string;
declare namespace StremioAddonSdk {
	export interface I__data {
		'adjective': string;
		'type': object;
		'a': number;
		'b': number;
	}

	export interface I__options {
		'before'?: string;
		'after'?: string;
		'escape'?: string;
		'clean'?: undefined;
	}

}