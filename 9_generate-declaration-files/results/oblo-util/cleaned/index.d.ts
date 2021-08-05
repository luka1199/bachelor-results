export = ObloUtil;

declare function ObloUtil(obj?: ObloUtil.I__obj | null, props?: string | Array<any> | Function | object, fn?: Function): object;
declare namespace ObloUtil {
	export interface I__obj {
		'a': string;
		'b': string;
		'c': string | Function;
		'd': string;
	}

}