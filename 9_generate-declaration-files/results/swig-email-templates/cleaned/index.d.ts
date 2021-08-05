export = EmailTemplates;

declare class EmailTemplates {
	constructor(options?: undefined);
	render(templateName: string, context: null | object, cb: Function): void;
	useTemplate(templatePath: string, context: object): string;
	generateText(templatePath: string, context: object, html: string, cb: Function): void;
	generateSubject(templatePath: string, context: object, cb: Function): void;
	rewriteUrls($: Function, rewrite: Function): void;
}

declare namespace EmailTemplates {
	export interface I__webResources {
		'relativeTo'?: undefined;
	}

	export interface I__juice {
		'webResources': I__webResources | object;
	}

	export interface I__options {
		'root': string;
		'juice'?: I__juice | object;
		'swig'?: undefined;
		'filters'?: object | I__filters;
		'rewriteUrl'?: undefined;
		'rewrite'?: Function;
		'text': boolean;
	}

	export interface I__filters {
		'whereproof': Function;
		'toString%%PROXY_METHOD%%': Function;
	}

}