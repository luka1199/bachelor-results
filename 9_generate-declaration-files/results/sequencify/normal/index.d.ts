export = Sequencify;

declare function Sequencify(tasks: object | Sequencify.I__tasks, names: Array<any>, results: Array<any>, nest?: Array<any>): void;
declare namespace Sequencify {
	export interface I__dep {
		'0': string;
		'1': string;
		'length': number;
	}

	export interface I__a {
		'dep': I__dep | Array<any>;
	}

	export interface I__tasks {
		'a': I__a | object;
		'c': object;
		'b': object;
		'd': object;
	}

}