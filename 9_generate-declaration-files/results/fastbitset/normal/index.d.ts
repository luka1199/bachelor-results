export = Fastbitset;

declare function Fastbitset(filePath: string, opts: Fastbitset.I__opts, cb?: Function): void;
declare function Fastbitset(filePath: string, opts: Fastbitset.I__opts, cb?: undefined): Promise;
declare namespace Fastbitset {
	export interface I__opts {
		'path': string;
	}

}