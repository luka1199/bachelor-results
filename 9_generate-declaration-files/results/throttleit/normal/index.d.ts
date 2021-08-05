export = Throttleit;

declare function Throttleit(func: Function | Throttleit.I__func, wait: number): Function;
declare namespace Throttleit {
	export interface I__func {
		'invoked': number;
	}

}