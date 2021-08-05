export = Stubby;

declare function Stubby(superagent: Function | Stubby.I__superagent, uri?: undefined): Function;
declare namespace Stubby {
	export interface I__prototype {
		'proxy': Function;
	}

	export interface I__Request {
		'prototype': Request | I__prototype;
	}

	export interface I__superagent {
		'Request': I__Request;
	}

}