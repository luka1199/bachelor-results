export = Vec2;

declare class Vec2 {
	constructor(x: number,y: number);
	equal(v: Vec2 | Vec2.I__v | number | Array<any>, w?: number): boolean;
	change(fn?: Function | Vec2 | null): Vec2;
	set(x: number | Vec2 | Vec2.I__x__1, y?: number, notify?: undefined): Vec2;
	set(x: number | Vec2 | Vec2.I__x, y?: number | boolean, notify?: boolean): void;
	clone(): Vec2;
	ignore(): Vec2;
	add(): Vec2;
	zero(): Vec2;
	negate(returnNew?: boolean): Vec2;
	subtract(): Vec2;
	multiply(): Vec2;
	rotate(r: number, inverse: boolean, returnNew?: boolean): Vec2;
	length(): number;
	lengthSquared(): number;
	distance(): number;
	normalize(returnNew?: boolean): Vec2;
	skew(): Vec2;
	abs(): Vec2;
	min(v: Vec2 | Vec2.I__v__2 | Vec2.I__v__3, returnNew?: boolean): Vec2;
	max(v: Vec2 | Vec2.I__v__4 | Vec2.I__v__5, returnNew?: boolean): Vec2;
	nearest(): Vec2;
	nearest(others: Array<any> | Vec2.I__others): null;
	clamp(): Vec2;
	lerp(): Vec2;
	dot(): number;
	perpDot(): number;
	angleTo(): number;
	divide(x: number | Array<any>, y?: boolean | number, returnNew?: boolean): Vec2;
	isPointOnLine(): boolean;
	toArray(): Array<any>;
	fromArray(): Vec2;
}

declare namespace Vec2 {
	export interface I__x {
		'y': number;
		'x': number;
	}

	export interface I__v {
		'y': number;
		'x': number;
	}

	export interface I__x__1 {
		'y': number;
		'x': number;
	}

	export interface I__v__2 {
		'x': number;
		'y': number;
	}

	export interface I__v__3 {
		'x': number;
		'y': number;
	}

	export interface I__v__4 {
		'x': number;
		'y': number;
	}

	export interface I__v__5 {
		'x': number;
		'y': number;
	}

	export interface I__others {
		'length': number;
	}

	export interface I__array {
		'0': number;
		'1': number;
	}

export function clean(val: number): number;
export function fromArray(array: Array<any> | Vec2.I__array, ctor?: Function): void;
export function fromArray(array: Array<any> | Vec2.I__array, ctor?: undefined): Vec2;
export function Vec2(x: number, y: number): Vec2;
}