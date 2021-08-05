export = BasicAuth;

declare function BasicAuth(req: BasicAuth.I__req): Credentials | void;
declare namespace BasicAuth {
	export interface I__req {
		'req'?: object;
	}

}