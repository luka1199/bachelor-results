export = Server;

declare class Server {
	constructor(options?: undefined);
	exchange(type: Function | Server.I__type | null | string, fn?: Function | Server.I__fn): Server;
}

declare namespace Server {
	export interface I__type {
		'name': string;
	}

	export interface I__fn {
		'name': string;
	}

}