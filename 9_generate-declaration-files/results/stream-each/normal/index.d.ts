export = StreamEach;

declare function StreamEach(stream: ReadStream | StreamEach.I__stream | Stream | Readable, done?: Function): Promise;
declare namespace StreamEach {
	export interface I__stream {
		'readable'?: boolean;
	}

}