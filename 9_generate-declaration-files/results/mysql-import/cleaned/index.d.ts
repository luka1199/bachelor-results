export = importer;

declare class importer {
	constructor(conn: Connection,err_handler: Function);
}

declare namespace importer {
	export interface I__settings {
		'host': string;
		'user': string;
		'password': string;
		'database': string;
		'onerror': Function;
	}

export function config(settings: importer.I__settings): importer;
}