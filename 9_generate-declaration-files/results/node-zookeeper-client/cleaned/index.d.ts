export = ConnectionStringParser;

declare class ConnectionStringParser {
	constructor(connectionString: string);
	getConnectionString(): string;
	getChrootPath(): string | void;
	getServers(): Array<any>;
}

declare namespace ConnectionStringParser {
}