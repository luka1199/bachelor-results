export interface I__version {
	'compressed': boolean;
	'privateKey': Buffer;
	'version': number;
}

export function encode(version: number | I__version, privateKey?: Buffer, compressed?: boolean): string;
