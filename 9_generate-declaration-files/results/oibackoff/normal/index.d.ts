export = Oibackoff;

declare function Oibackoff(obj?: Oibackoff.I__obj | null, props?: string | Array<any> | Function | object, fn?: Function): object;
declare namespace Oibackoff {
	export interface I__obj {
		'a': string;
		'b': string;
		'c': string | Function;
		'd': string;
	}

}