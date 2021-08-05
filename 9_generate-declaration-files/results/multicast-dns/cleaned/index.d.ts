export = MulticastDns;

declare function MulticastDns(opts: MulticastDns.I__opts): EventEmitter;
declare namespace MulticastDns {
	export interface I__opts {
		'port': number;
		'type'?: undefined;
		'ip': string;
		'socket'?: undefined;
		'reuseAddr'?: undefined;
		'bind'?: undefined;
		'interface'?: undefined;
		'multicast': boolean;
	}

}