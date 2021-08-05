export = Urlrouter;

declare function Urlrouter(fn: Function, options?: Urlrouter.I__options): Function;
declare namespace Urlrouter {
	export interface I__options {
		'paramsName'?: undefined;
		'pageNotFound': Function;
		'errorHandler': Function;
	}

}