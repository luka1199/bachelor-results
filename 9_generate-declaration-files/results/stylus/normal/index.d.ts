export = Stylus;

declare function Stylus(superagent: Function | Stylus.I__superagent): Function;
declare namespace Stylus {
	export interface I__prototype {
		'retry': Function;
	}

	export interface I__Request {
		'prototype': Request | I__prototype;
	}

	export interface I__superagent {
		'Request': I__Request;
	}

}