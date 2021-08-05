export interface I__0 {
	'0': number;
	'1': number;
}

export interface I__1 {
	'0': number;
	'1': number;
}

export interface I__2 {
	'0': number;
	'1': number;
}

export interface I__3 {
	'0': number;
	'1': number;
}

export interface I__4 {
	'0': number;
	'1': number;
}

export interface I__points {
	'0': I__0 | Array<any>;
	'1': I__1 | Array<any>;
	'2': I__2 | Array<any>;
	'3': I__3 | Array<any>;
	'4': I__4 | Array<any>;
	'length': number;
}

export function findSelfIntersections(points: Array<any> | I__points, findAllLines?: undefined): boolean;
