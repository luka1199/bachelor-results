export = EventEmitter;

declare class EventEmitter {
	constructor();
	on(eventName: string, listener: Function): EventEmitter;
	emit(eventName: string, event: object | Function): EventEmitter;
	off(eventName: string, listener: Function): EventEmitter;
	clearListeners(eventName: string): EventEmitter;
}

declare namespace EventEmitter {
}