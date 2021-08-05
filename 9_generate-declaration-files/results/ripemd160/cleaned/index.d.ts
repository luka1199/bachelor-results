export = RingBuffer;

declare class RingBuffer {
	constructor(capacity?: undefined,evictedCb?: undefined);
	capacity(): number;
	isEmpty(): boolean;
	size(): number;
	enq(element: string): number;
	isFull(): boolean;
	peek(): string;
	peekN(count: number): Array<any>;
	deq(): string;
	deqN(count: number): Array<any>;
	_evictedCb(evicted: string): void;
}

declare namespace RingBuffer {
}