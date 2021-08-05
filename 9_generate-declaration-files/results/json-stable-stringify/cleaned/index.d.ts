export = JsonStableStringify;

declare function JsonStableStringify(obj: object | Array<any>, opts?: Function | JsonStableStringify.I__opts): string;
declare namespace JsonStableStringify {
	export interface I__opts {
		'space'?: string | number;
		'cycles'?: boolean;
		'replacer'?: Function;
		'cmp'?: undefined;
	}

}