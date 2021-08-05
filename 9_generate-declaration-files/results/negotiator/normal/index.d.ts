export = Negotiator;

declare class Negotiator {
	constructor(request: Negotiator.I__request);
	charset(available?: Array<any>): string | void;
	charsets(available?: Array<any>): Array<any>;
}

declare namespace Negotiator {
	export interface I__headers {
		'accept-charset'?: string;
	}

	export interface I__request {
		'headers': I__headers | object;
	}

}