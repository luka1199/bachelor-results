export = Ffprobe;

declare function Ffprobe(filePath: string, opts: Ffprobe.I__opts, cb?: Function): void;
declare function Ffprobe(filePath: string, opts: Ffprobe.I__opts, cb?: undefined): Promise;
declare namespace Ffprobe {
	export interface I__opts {
		'path': string;
	}

}