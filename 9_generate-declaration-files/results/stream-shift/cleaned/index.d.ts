export interface I__opts {
	'chunkSize'?: number;
	'initialSize'?: undefined;
	'incrementAmount'?: undefined;
	'frequency': number;
}

export interface I__data {
	'length': number;
}

export interface I__data__1 {
	'length': number;
}

export interface I__data__2 {
	'length': number;
}

export interface I__data__3 {
	'length': number;
}

export interface I__data__4 {
	'length': number;
}

export interface I__data__5 {
	'length': number;
}

export class ReadableStreamBuffer {
	constructor(opts: I__opts);
	size(): number;
	maxSize(): number;
	on(): ;
	stop(): void;
	push(): boolean;
	read(): null | Buffer;
	put(data: string | Buffer | I__data | I__data__1 | I__data__2 | I__data__3 | I__data__4 | I__data__5, encoding?: undefined): void;
	once(): ;
	pause(): ;
}

