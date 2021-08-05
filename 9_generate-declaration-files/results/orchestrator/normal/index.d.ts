export = Orchestrator;

declare class Orchestrator {
	constructor();
	add(name: string, dep?: Function | Array<any> | Orchestrator.I__dep, fn?: Function): Orchestrator;
	start(): Orchestrator;
	_resetAllTasks(): void;
	_resetTask(task?: Orchestrator.I__task | Function): void;
	sequence(): void;
	emit(): boolean;
	_runStep(): void;
	_readyToRunTask(task: Orchestrator.I__task__2 | Orchestrator.I__task): boolean;
	_runTask(task: Orchestrator.I__task__3 | Orchestrator.I__task): void;
	(task: object | Orchestrator.I__task__4 | Orchestrator.I__task, meta: Orchestrator.I__meta | string): void;
	allDone(): boolean;
	stop(err: null | Error | string | Orchestrator.I__err__7, successfulFinish?: boolean): void;
	on(): Orchestrator;
	hasTask(name: string): boolean;
	onAll(callback: Function): void;
	_resetSpecificTasks(names: Array<any> | Orchestrator.I__names): void;
	task(name: string, dep?: undefined, fn?: undefined): object | void;
	task(name: string, dep?: Function, fn?: undefined): void;
}

declare namespace Orchestrator {
	export interface I__dep {
		'0': string;
		'should': object;
		'length': number;
	}

	export interface I__task {
		'done'?: boolean;
	}

	export interface I__dep__1 {
		'0': string;
		'length': number;
	}

	export interface I__task__2 {
		'dep': I__dep__1 | Array<any> | I__dep;
		'name': string;
	}

	export interface I__task__3 {
		'name': string | I__name;
		'args': object;
		'fn': Function;
	}

	export interface I__name {
		'should': object;
	}

	export interface I__meta {
		'duration': number | I__duration;
		'hrDuration': Array<any>;
	}

	export interface I__duration {
		'should': object;
	}

	export interface I__task__4 {
		'args'?: object;
		'name': string | I__name__5;
		'duration'?: I__duration__6;
		'hrDuration'?: undefined;
	}

	export interface I__name__5 {
		'should': object;
	}

	export interface I__duration__6 {
		'should': object;
	}

	export interface I__err {
		'should': object;
	}

	export interface I__err__7 {
		'should': object;
	}

	export interface I__names {
		'0': string;
		'1': string;
		'length': number;
	}

}