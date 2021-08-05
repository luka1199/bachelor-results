export = ProgressStream;

declare function ProgressStream(options: ProgressStream.I__options, onprogress?: undefined): DestroyableTransform;
declare namespace ProgressStream {
	export interface I__options {
		'length'?: undefined;
		'time': number;
		'drain': boolean;
		'transferred'?: undefined;
		'speed': number;
		'objectMode'?: undefined;
	}

}