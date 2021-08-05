export = SvgPathBbox;

declare function SvgPathBbox(superagent: Function | SvgPathBbox.I__superagent): Function;
declare namespace SvgPathBbox {
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