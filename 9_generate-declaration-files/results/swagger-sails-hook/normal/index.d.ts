export = SwaggerSailsHook;

declare function SwaggerSailsHook(sails: SwaggerSailsHook.I__sails): object;
declare namespace SwaggerSailsHook {
	export interface I__config {
		'appPath': string;
		'paths': I__paths;
	}

	export interface I__paths {
		'config'?: undefined;
		'controllers': string;
	}

	export interface I__sails {
		'config': I__config;
	}

}