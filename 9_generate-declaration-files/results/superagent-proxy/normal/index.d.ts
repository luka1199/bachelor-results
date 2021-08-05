export = SuperagentProxy;

declare function SuperagentProxy(superagent: Function | SuperagentProxy.I__superagent, uri?: undefined): Function;
declare namespace SuperagentProxy {
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