export = AjvPack;

declare function AjvPack(callback?: Function | AjvPack.I__callback, _opts?: AjvPack.I___opts): Agent;
declare namespace AjvPack {
	export interface I__callback {
		'timeout'?: number;
		'length': number;
	}

	export interface I___opts {
		'timeout': number;
	}

}