export = SupportsColor;

declare function SupportsColor(superagent: Function | SupportsColor.I__superagent, uri?: undefined): Function;
declare namespace SupportsColor {
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