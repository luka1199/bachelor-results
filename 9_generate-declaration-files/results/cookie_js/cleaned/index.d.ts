export interface I__attrs {
	'maxage': number;
	'maxAge': number;
	'sameSite': boolean | string;
}

export class Cookie {
	constructor(name: string,value: string,attrs: I__attrs);
	toHeader(): string;
	toString(): string;
}

