export = Router;

declare class Router {
	constructor(options?: undefined);
	extendExpress(app: Function): Router;
	registerAppHelpers(app: Function): Router;
	add(method: string, path: string, callbacks: Function, options?: Router.I__options | Router.I__options__1): void;
}

declare namespace Router {
	export interface I__options {
		'caseSensitive'?: undefined;
		'name': string;
	}

	export interface I__options__1 {
		'caseSensitive'?: undefined;
		'name': string;
	}

}