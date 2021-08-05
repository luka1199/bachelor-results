export = StreamToArray;

declare function StreamToArray(stream: ReadStream | StreamToArray.I__stream | Stream | Readable, done?: Function): Promise;
declare namespace StreamToArray {
	export interface I__stream {
		'readable'?: boolean;
	}

}