export = Superfine;

declare function Superfine(superagent: Function | Superfine.I__superagent): Function;
declare namespace Superfine {
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