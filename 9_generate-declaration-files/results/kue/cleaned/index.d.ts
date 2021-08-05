export = Queue;

declare class Queue {
	constructor(options?: undefined);
	create(): Job;
	priority(level: string): Job;
	on(): Job;
}

declare namespace Queue {
export function createQueue(options?: undefined): Queue;
}