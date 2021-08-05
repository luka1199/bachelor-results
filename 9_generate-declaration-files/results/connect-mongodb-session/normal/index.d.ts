export = ConnectMongodbSession;

declare function ConnectMongodbSession(connect: ConnectMongodbSession.I__connect): Function;
declare namespace ConnectMongodbSession {
	export interface I__Store {
		'prototype': f;
	}

	export interface I__session {
		'Store': I__Store;
	}

	export interface I__connect {
		'Store'?: Function;
		'session': I__session;
	}

}