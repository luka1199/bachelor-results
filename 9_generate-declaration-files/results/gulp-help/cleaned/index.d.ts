export = GulpHelp;

declare function GulpHelp(gulp: GulpHelp.I__gulp, options?: object): object;
declare namespace GulpHelp {
	export interface I__tasks {
		'default'?: undefined;
	}

	export interface I__gulp {
		'task': Function;
		'tasks': I__tasks | object;
	}

}