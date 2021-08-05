export = Timer;

declare class Timer {
	constructor(start?: undefined);
	on(): Timer;
	start(): boolean;
	isStopped(): boolean;
	emit(): boolean;
	emitTime(): number | object;
	time(): number;
	f(): number;
	timeFromStart(): number;
	isStarted(): boolean;
	(): boolean | object | string;
	stopParallel(): boolean;
	toggle(): boolean;
}

declare namespace Timer {
}