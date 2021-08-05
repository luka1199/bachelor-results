export = CachePolicy;

declare class CachePolicy {
	constructor(req: CachePolicy.I__req,res: CachePolicy.I__res);
}

declare namespace CachePolicy {
	export interface I__headers {
		'host'?: string;
		'authorization'?: string;
		'cache-control'?: string;
		'accept'?: undefined;
		'cookie'?: undefined;
		'x-github-otp'?: undefined;
		'weather': string;
		'moon-phase'?: undefined;
		'sun': string;
	}

	export interface I__req {
		'url'?: string;
		'headers': I__headers | object;
		'method': string;
	}

	export interface I__headers__1 {
		'cache-control'?: string;
		'vary'?: string;
		'pragma'?: string;
		'expires'?: string;
		'age'?: string | number;
		'date'?: string;
		'last-modified'?: string;
		'set-cookie'?: string;
	}

	export interface I__res {
		'headers': object | I__headers__1 | I__headers;
		'status': number;
	}

}