export = Confit;

declare function Confit(append: boolean, options?: Confit.I__options): Function;
declare namespace Confit {
	export interface I__options {
		'base'?: string;
		'headers'?: object;
		'code'?: number;
	}

}