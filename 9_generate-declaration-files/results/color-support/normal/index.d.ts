export = ColorSupport;

declare function ColorSupport(color: string, options?: ColorSupport.I__options): object;
declare namespace ColorSupport {
	export interface I__options {
		'pick'?: Array<any>;
		'omit'?: Array<any>;
	}

}