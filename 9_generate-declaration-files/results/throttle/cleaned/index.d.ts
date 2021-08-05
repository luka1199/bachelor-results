export = Throttle;

declare class Throttle {
	constructor(opts: number);
	on(): Throttle;
	pipe(): Throttle;
}

declare namespace Throttle {
}