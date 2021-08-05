export = Mv;

declare function Mv(source: string, dest: string, options: Function | Mv.I__options, cb?: Function): void;
declare namespace Mv {
	export interface I__options {
		'mkdirp'?: boolean;
		'clobber'?: boolean;
		'limit'?: undefined;
	}

}