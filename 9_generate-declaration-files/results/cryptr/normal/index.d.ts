export = Cryptr;

declare class Cryptr {
	constructor(secret: string);
	encrypt(value: string): string;
	decrypt(value: string): string;
}

declare namespace Cryptr {
}