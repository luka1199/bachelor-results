export = Chain;

declare class Chain {
	constructor(fns: Array<any> | Chain.I__fns,options?: undefined);
}

declare namespace Chain {
	export interface I__fns {
		'length': number;
	}

}