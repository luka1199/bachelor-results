export = ColorNamer;

declare function ColorNamer(color: string, options?: ColorNamer.I__options): object;
declare namespace ColorNamer {
	export interface I__options {
		'pick'?: Array<any>;
		'omit'?: Array<any>;
	}

}