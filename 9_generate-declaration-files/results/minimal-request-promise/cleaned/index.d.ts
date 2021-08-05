export = MinimalRequestPromise;

declare function MinimalRequestPromise(callOptions: MinimalRequestPromise.I__callOptions, PromiseImplementation?: Function): Promise;
declare namespace MinimalRequestPromise {
	export interface I__callOptions {
		'port'?: number | null;
		'protocol'?: string;
		'timeout'?: undefined;
		'body'?: string;
		'resolveErrors'?: undefined;
	}

}