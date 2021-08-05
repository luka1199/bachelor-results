export = IsGlob;

declare function IsGlob(str?: string | null | Array<any>, options?: IsGlob.I__options): boolean;
declare namespace IsGlob {
	export interface I__options {
		'strict': boolean;
	}

}