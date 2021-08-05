export = Consul;

declare function Consul(filename?: string, options?: Consul.I__options): string;
declare namespace Consul {
	export interface I__options {
		'type'?: string;
		'fallback'?: boolean | string;
	}

}