export = ConnectSlashes;

declare function ConnectSlashes(append: boolean, options?: ConnectSlashes.I__options): Function;
declare namespace ConnectSlashes {
	export interface I__options {
		'base'?: string;
		'headers'?: object;
		'code'?: number;
	}

}