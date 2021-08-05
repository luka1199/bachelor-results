export = EndOfStream;

declare function EndOfStream(stream: WriteStream | EndOfStream.I__stream | ReadStream | ChildProcess | Socket, opts: null | Function, callback?: Function): Function;
declare namespace EndOfStream {
	export interface I__stream {
		'_writableState'?: WritableState;
		'_readableState'?: ReadableState;
		'readable'?: boolean;
		'writable'?: boolean;
		'req'?: undefined;
	}

}