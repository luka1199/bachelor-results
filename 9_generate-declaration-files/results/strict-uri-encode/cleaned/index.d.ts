export = StrictUriEncode;

declare function StrictUriEncode(stream: Readable | StrictUriEncode.I__stream | DelayedStream | Writable | ReadStream | WriteStream): Promise;
declare namespace StrictUriEncode {
	export interface I__stream {
		'readable'?: boolean;
		'writable'?: boolean;
	}

}