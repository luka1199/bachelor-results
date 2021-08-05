export function start(callback: Function): void;
export class Client {
	constructor(options: object);
	add(name: string, value?: number | string | boolean | null | object | Array<any> | Function | Date | RegExp, replace?: undefined): void;
	put(name: string, value: number): void;
	close(): void;
}

