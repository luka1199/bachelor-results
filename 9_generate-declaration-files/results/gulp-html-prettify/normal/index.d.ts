export = GulpHtmlPrettify;

declare function GulpHtmlPrettify(gulp: GulpHtmlPrettify.I__gulp, options?: object): object;
declare namespace GulpHtmlPrettify {
	export interface I__tasks {
		'default'?: undefined;
	}

	export interface I__gulp {
		'task': Function;
		'tasks': I__tasks | object;
	}

}