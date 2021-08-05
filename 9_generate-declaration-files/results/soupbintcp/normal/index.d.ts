export = Server;

declare class Server {
	constructor(options: object,callback?: undefined);
	on(): EventEmitter;
}

declare namespace Server {
}