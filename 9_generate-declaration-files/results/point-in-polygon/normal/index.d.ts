export = PointInPolygon;

declare function PointInPolygon(point: Array<any> | PointInPolygon.I__point, vs: Array<any> | PointInPolygon.I__vs): boolean;
declare namespace PointInPolygon {
	export interface I__point {
		'0': number;
		'1': number;
	}

	export interface I__0 {
		'0': number;
		'1': number;
	}

	export interface I__3 {
		'0': number;
		'1': number;
	}

	export interface I__vs {
		'0': I__0 | Array<any>;
		'1': Array<any>;
		'2': Array<any>;
		'3': I__3 | Array<any>;
		'length': number;
	}

}