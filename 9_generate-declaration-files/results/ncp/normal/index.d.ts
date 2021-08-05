export = Ncp;

declare function Ncp(source: string, dest: string, options: Function | Ncp.I__options, callback?: Function): void;
declare namespace Ncp {
	export interface I__options {
		'filter'?: undefined;
		'rename'?: undefined;
		'transform'?: undefined;
		'clobber'?: boolean;
		'modified'?: boolean;
		'dereference'?: boolean;
		'limit'?: undefined;
	}

}