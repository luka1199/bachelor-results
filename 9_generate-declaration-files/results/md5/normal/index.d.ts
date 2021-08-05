export = Md5;

declare function Md5(message: string | number | Buffer | Uint8Array, options?: Md5.I__options): string;
declare namespace Md5 {
	export interface I__options {
		'asBytes'?: undefined;
		'asString'?: boolean;
	}

}