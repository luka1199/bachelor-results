export = FastList;

declare class FastList {
	constructor();
	push(data: string): void;
	pop(): string;
	shift(): string;
	item(n: number): string;
	slice(n?: number, m?: number): Array<any>;
}

declare namespace FastList {
}