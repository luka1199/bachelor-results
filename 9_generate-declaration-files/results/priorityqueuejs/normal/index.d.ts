export = PriorityQueue;

declare class PriorityQueue {
	constructor(comparator: Function);
	DEFAULT_COMPARATOR(a: string | number, b: string | number): number;
	isEmpty(): boolean;
	size(): number;
	enq(element: string | object): number;
	peek(): string | object;
	_compare(a: number, b: number): number;
	_swap(a: number, b: number): void;
	deq(): string | object;
	_comparator(a: PriorityQueue.I__a | PriorityQueue.I__a__1 | PriorityQueue.I__a__3, b: PriorityQueue.I__b | PriorityQueue.I__b__2 | PriorityQueue.I__b__4): number;
	forEach(fn: Function): void;
}

declare namespace PriorityQueue {
	export interface I__a {
		'priority': number;
	}

	export interface I__b {
		'priority': number;
	}

	export interface I__a__1 {
		'priority': number;
	}

	export interface I__b__2 {
		'priority': number;
	}

	export interface I__a__3 {
		'pri': number;
	}

	export interface I__b__4 {
		'pri': number;
	}

}