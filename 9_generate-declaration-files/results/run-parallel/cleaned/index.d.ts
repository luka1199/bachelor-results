export = RunParallel;

declare function RunParallel(tasks: Array<any> | RunParallel.I__tasks | object, cb?: Function): void;
declare namespace RunParallel {
	export interface I__tasks {
		'length': number;
	}

}