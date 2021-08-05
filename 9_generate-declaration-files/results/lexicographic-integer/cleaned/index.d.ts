export = Codec;

declare class Codec {
	constructor(opts: Codec.I__opts);
	keyAsBuffer(opts?: object): boolean;
	_keyEncoding(opts?: Codec.I__opts__1 | Codec.I__opts, batchOpts?: Codec.I__batchOpts): object;
	_encoding(encoding?: string): object;
	valueAsBuffer(opts?: object): boolean;
	_valueEncoding(opts?: Codec.I__opts__2 | Codec.I__opts | object, batchOpts?: Codec.I__batchOpts__3 | Codec.I__batchOpts): object;
	encodeBatch(ops: Array<any>, opts?: object): Array<any>;
	encodeKey(key: string, opts?: object, batchOpts?: object): string;
	encodeKey(key: string, opts?: object, batchOpts?: undefined): Buffer | string;
	encodeKey(key: string, opts?: undefined, batchOpts?: undefined): Buffer;
	encodeKey(key: object, opts?: object, batchOpts?: undefined): object;
	encodeValue(value: string | object, opts?: object, batchOpts?: object): string;
	encodeValue(value: object, opts?: undefined, batchOpts?: object): object;
	encodeValue(value: string, opts?: object, batchOpts?: undefined): Buffer;
	createStreamDecoder(opts: Codec.I__opts__4 | Codec.I__opts): Function;
	decodeKey(key: Buffer, opts?: object): string | Buffer;
	decodeKey(key: Buffer, opts?: undefined): string;
	decodeValue(value: string | Buffer, opts?: object): string;
	decodeValue(value: Buffer, opts?: object): string | Buffer;
	encodeLtgt(ltgt: Codec.I__ltgt): object;
}

declare namespace Codec {
	export interface I__opts {
		'keyEncoding'?: string;
		'valueEncoding'?: string;
		'encoding'?: string;
	}

	export interface I__opts__1 {
		'keyEncoding'?: string;
	}

	export interface I__batchOpts {
		'keyEncoding'?: undefined;
	}

	export interface I__opts__2 {
		'valueEncoding'?: string;
		'encoding'?: string;
	}

	export interface I__batchOpts__3 {
		'valueEncoding'?: string;
		'encoding'?: string;
	}

	export interface I__opts__4 {
		'keys'?: boolean;
		'values'?: boolean;
	}

	export interface I__ltgt {
		'start': string;
		'lte': string;
		'keyEncoding': string;
	}

}