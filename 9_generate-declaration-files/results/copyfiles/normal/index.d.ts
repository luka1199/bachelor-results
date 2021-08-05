export = Copyfiles;

declare function Copyfiles(args: Array<any>, config: Function | Copyfiles.I__config | number | boolean, callback?: Function): void;
declare namespace Copyfiles {
	export interface I__config {
		'up'?: number;
		'soft'?: boolean;
		'exclude'?: Array<any>;
		'all'?: boolean;
		'follow'?: boolean;
	}

}