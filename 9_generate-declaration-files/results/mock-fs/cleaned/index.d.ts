export = MockFs;

declare function MockFs(options?: MockFs.I__options): Function;
declare namespace MockFs {
	export interface I__options {
		'base'?: number | string;
		'ratio'?: number | string;
	}

}