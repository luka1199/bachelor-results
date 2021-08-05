export = Promise;

declare class Promise {
	constructor(back?: undefined);
	on(event: string, callback: Function): Promise;
	fulfill(): Promise;
	(event: string): Promise;
	reject(reason: Error | number | string): Promise;
	onResolve(fn: Function): Promise;
	end(onReject?: Function): Promise;
	onReject(fn?: Function): Promise;
	hasRejectListeners(): boolean;
	onFulfill(fn: Function): Promise;
	then(onFulfill?: Function, onReject?: Function): Promise;
	chain(p2: Promise | Promise.I__p2): Promise;
	resolve(err?: Error | null, val?: object): Promise;
	all(promiseOfArr: Function): Promise;
}

declare namespace Promise {
	export interface I__p2 {
		'fulfill': Function;
		'reject': Function;
	}

}