export interface I__options {
	'buffer': Buffer;
	'name': string;
	'size'?: undefined;
	'encoding'?: undefined;
	'tempFilePath'?: string;
	'truncated'?: undefined;
	'mimetype'?: undefined;
	'hash'?: undefined;
}

export function lib(options: I__options): object;
