export = Keygrip;

declare class Keygrip {
	constructor(keys: Array<any>,algorithm: string,encoding: string);
	sign(data: string): string;
	index(data: string, digest: string): number;
	verify(data: string, digest: string): boolean;
}

declare namespace Keygrip {
	export interface I__keys {
		'0': string;
	}

}