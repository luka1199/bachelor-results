export = Router;

declare class Router {
	constructor(opts?: undefined);
	routes(): Function;
	get(name: string | RegExp | Array<any>, path: Function | string, middleware?: Function): Router;
	register(path: string | RegExp, methods: Array<any>, middleware: Array<any> | Function, opts: Router.I__opts__1 | Router.I__opts): Layer;
	register(path: Array<any>, methods: Array<any>, middleware: Array<any>, opts: object): Router;
	match(path: string, method: string): object;
	(name: string, path: Function, middleware?: undefined): Router;
	use(): Router;
	url(name: string, params?: undefined): string;
	route(name: string): Layer;
	allowedMethods(options?: Router.I__options): Function;
	all(name: string, path: string, middleware: Function): Router;
	put(name: string, path: Function, middleware?: undefined): Router;
	acl(name: RegExp | string, path: Function | string | RegExp, middleware?: Function): Router;
	redirect(source: string, destination: string, code?: undefined): Router;
	param(param: string, middleware: Function): Router;
	prefix(prefix: string): Router;
}

declare namespace Router {
	export interface I__opts {
		'methods'?: undefined;
		'sensitive'?: undefined;
		'strict'?: boolean;
		'prefix'?: string;
		'routerPath'?: undefined;
	}

	export interface I__opts__1 {
		'end'?: boolean;
		'name'?: null | string;
		'sensitive'?: undefined;
		'strict'?: undefined;
		'prefix'?: undefined;
		'ignoreCaptures'?: boolean;
	}

	export interface I__options {
		'throw': boolean;
		'methodNotAllowed'?: Function;
		'notImplemented'?: Function;
	}

}