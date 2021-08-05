export = BlobStream;

declare function BlobStream(a: Buffer | BlobStream.I__a | string, b: Buffer | BlobStream.I__b | string): Buffer;
declare namespace BlobStream {
	export interface I__a {
		'0': number;
		'1': number;
		'length': number;
	}

	export interface I__b {
		'0': number;
		'1': number;
		'length': number;
	}

}