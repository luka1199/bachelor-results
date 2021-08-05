export = SunriseSunsetJs;

declare function SunriseSunsetJs(superagent: Function | SunriseSunsetJs.I__superagent): Function;
declare namespace SunriseSunsetJs {
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