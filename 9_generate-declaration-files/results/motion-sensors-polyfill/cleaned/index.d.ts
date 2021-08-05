export = MongoConnection;

declare class MongoConnection {
	constructor(config: MongoConnection.I__config);
	connect(cb: Function): void;
	getConnectionUri(): string;
}

declare namespace MongoConnection {
	export interface I__config {
		'mongoUri'?: string;
		'hosts': string;
		'db'?: string;
		'user'?: string;
		'password'?: string;
		'replicaSet'?: string;
	}

}