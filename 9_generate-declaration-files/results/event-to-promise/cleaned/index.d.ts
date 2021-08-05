export = EventToPromise;

declare function EventToPromise(emitter: EventEmitter, event: string, opts?: EventToPromise.I__opts): Promise;
declare namespace EventToPromise {
	export interface I__opts {
		'array'?: boolean;
		'ignoreErrors'?: boolean;
		'error'?: string;
	}

}