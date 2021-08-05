export = CloneableReadable;

declare function CloneableReadable(stream: Class | CloneableReadable.I__stream | ReadStream, opts?: undefined): Cloneable;
declare namespace CloneableReadable {
	export interface I___readableState {
		'objectMode': boolean;
	}

	export interface I__stream {
		'_readableState': I___readableState | ReadableState;
	}

}