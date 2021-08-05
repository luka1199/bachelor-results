export = Victor;

declare class Victor {
	constructor(x: number,y: number);
	addX(vec: Victor | Victor.I__vec): Victor;
	addY(vec: Victor | Victor.I__vec__1): Victor;
	add(vec: Victor | Victor.I__vec__2): Victor;
	subtractX(vec: Victor | Victor.I__vec__3): Victor;
	subtractY(vec: Victor | Victor.I__vec__4): Victor;
	subtract(vec: Victor | Victor.I__vec__5): Victor;
	divideX(vector: Victor | Victor.I__vector): Victor;
	divideY(vector: Victor | Victor.I__vector__6): Victor;
	divide(vector: Victor | Victor.I__vector__7 | Victor.I__vector): Victor;
	divideScalar(scalar: number): Victor;
	divideScalarX(scalar: number): Victor;
	divideScalarY(scalar: number): Victor;
	multiplyX(vector: Victor | Victor.I__vector__8): Victor;
	multiplyY(vector: Victor | Victor.I__vector__9): Victor;
	multiply(vector: Victor | Victor.I__vector__10): Victor;
	multiplyScalar(scalar: number): Victor;
	multiplyScalarX(scalar: number): Victor;
	multiplyScalarY(scalar: number): Victor;
	addScalar(scalar: number): Victor;
	addScalarX(scalar: number): Victor;
	addScalarY(scalar: number): Victor;
	subtractScalar(scalar: number): Victor;
	subtractScalarX(scalar: number): Victor;
	subtractScalarY(scalar: number): Victor;
	norm(): Victor;
	length(): number;
	f(): number;
	lengthSq(): number;
	limit(max: number, factor: number): Victor;
	randomize(topLeft: Victor, bottomRight: Victor): Victor;
	randomizeX(topLeft: Victor | Victor.I__topLeft, bottomRight: Victor | Victor.I__bottomRight): Victor;
	randomizeY(topLeft: Victor | Victor.I__topLeft__11 | Victor.I__topLeft, bottomRight: Victor | Victor.I__bottomRight__12 | Victor.I__bottomRight): Victor;
	randomizeAny(topLeft: Victor, bottomRight: Victor): Victor;
	unfloat(): Victor;
	mixX(vec: Victor | Victor.I__vec__13 | Victor.I__vec, amount: number): Victor;
	mixY(vec: Victor | Victor.I__vec__14 | Victor.I__vec, amount: number): Victor;
	mix(vec: Victor, amount: number): Victor;
	zero(): Victor;
	horizontalAngle(): number;
	rotate(angle: number): Victor;
	rotateDeg(angle: number): Victor;
	rotateTo(rotation: number): Victor;
	rotateToDeg(rotation: number): Victor;
	angleDeg(): number;
	rotateBy(rotation: number): Victor;
	rotateByDeg(rotation: number): Victor;
	projectOnto(vec2: Victor | Victor.I__vec2): Victor;
	clone(): Victor;
	dot(vec2: Victor | Victor.I__vec2__15): number;
	distanceX(vec: Victor | Victor.I__vec__16): number;
	distanceY(vec: Victor | Victor.I__vec__17): number;
	isZero(): boolean;
	isEqualTo(vec2: Victor | Victor.I__vec2__18 | Victor.I__vec2): boolean;
	toArray(): Array<any>;
	toObject(): object;
}

declare namespace Victor {
	export interface I__vec {
		'x': number;
	}

	export interface I__vec__1 {
		'y': number;
	}

	export interface I__vec__2 {
		'x': number;
		'y': number;
	}

	export interface I__vec__3 {
		'x': number;
	}

	export interface I__vec__4 {
		'y': number;
	}

	export interface I__vec__5 {
		'x': number;
		'y': number;
	}

	export interface I__vector {
		'x': number;
	}

	export interface I__vector__6 {
		'y': number;
	}

	export interface I__vector__7 {
		'x': number;
		'y': number;
	}

	export interface I__vector__8 {
		'x': number;
	}

	export interface I__vector__9 {
		'y': number;
	}

	export interface I__vector__10 {
		'x': number;
		'y': number;
	}

	export interface I__topLeft {
		'x': number;
	}

	export interface I__bottomRight {
		'x': number;
	}

	export interface I__topLeft__11 {
		'y': number;
	}

	export interface I__bottomRight__12 {
		'y': number;
	}

	export interface I__vec__13 {
		'x': number;
	}

	export interface I__vec__14 {
		'y': number;
	}

	export interface I__vec2 {
		'x': number;
		'y': number;
	}

	export interface I__vec2__15 {
		'x': number;
		'y': number;
	}

	export interface I__vec__16 {
		'x': number;
	}

	export interface I__vec__17 {
		'y': number;
	}

	export interface I__vec2__18 {
		'x': number;
		'y': number;
	}

}