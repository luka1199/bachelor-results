export = Forms;

declare function Forms(req: Forms.I__req): Array<any>;
declare namespace Forms {
	export interface I__headers {
		'x-forwarded-for'?: undefined;
	}

	export interface I__connection {
		'remoteAddress': string;
	}

	export interface I__req {
		'headers': I__headers;
		'connection': I__connection;
	}

}