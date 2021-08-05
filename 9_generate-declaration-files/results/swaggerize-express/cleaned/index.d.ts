export = SwaggerizeExpress;

declare function SwaggerizeExpress(router: Function, options: SwaggerizeExpress.I__options): void;
declare namespace SwaggerizeExpress {
	export interface I__options {
		'routes': Array<any>;
		'docspath'?: string;
		'api': object;
	}

}