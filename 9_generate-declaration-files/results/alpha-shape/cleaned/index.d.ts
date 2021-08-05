export = AlphaShape;

declare function AlphaShape(callback?: Function | AlphaShape.I__callback, _opts?: AlphaShape.I___opts): Agent;
declare namespace AlphaShape {
	export interface I__callback {
		'timeout'?: number;
		'length': number;
	}

	export interface I___opts {
		'timeout': number;
	}

}