export = StreamToPromise;

declare function StreamToPromise(stream: Readable | StreamToPromise.I__stream | DelayedStream | Writable | ReadStream | WriteStream): Promise;
declare namespace StreamToPromise {
	export interface I__stream {
		'readable'?: boolean;
		'writable'?: boolean;
	}

}