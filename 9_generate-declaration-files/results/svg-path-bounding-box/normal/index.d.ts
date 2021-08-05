export = SvgPathBoundingBox;

declare function SvgPathBoundingBox(superagent: Function | SvgPathBoundingBox.I__superagent): Function;
declare namespace SvgPathBoundingBox {
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