export = ExpressUnless;

declare function ExpressUnless(middleware: ExpressUnless.I__middleware | Function, options?: undefined): Function;
declare namespace ExpressUnless {
	export interface I__middleware {
		'useOriginalUrl'?: boolean;
	}

}