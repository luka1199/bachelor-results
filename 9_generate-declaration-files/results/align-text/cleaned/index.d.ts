export = AlignText;

declare function AlignText(callback?: Function | AlignText.I__callback, _opts?: AlignText.I___opts): Agent;
declare namespace AlignText {
	export interface I__callback {
		'timeout'?: number;
		'length': number;
	}

	export interface I___opts {
		'timeout': number;
	}

}