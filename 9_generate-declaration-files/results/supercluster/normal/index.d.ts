export = Supercluster;

declare function Supercluster(superagent: Function | Supercluster.I__superagent): Function;
declare namespace Supercluster {
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