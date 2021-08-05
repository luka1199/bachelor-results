export = Ultron;

declare class Ultron {
	constructor(ee: EventEmitter | Ultron.I__ee);
	destroy(): boolean;
	remove(): Ultron;
	on(event: string | symbol, fn: Function | Ultron.I__fn, context?: number): Ultron;
	once(event: string | symbol, fn: Function | Ultron.I__fn__1 | Ultron.I__fn, context?: number): Ultron;
}

declare namespace Ultron {
	export interface I__ee {
		'eventNames': Function;
	}

	export interface I__fn {
		'__ultron': number;
		'listener'?: undefined;
	}

	export interface I__fn__1 {
		'__ultron': number;
		'listener'?: undefined;
	}

}