export = Moo;

declare function Moo(opts: Moo.I__opts): EventEmitter;
declare namespace Moo {
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