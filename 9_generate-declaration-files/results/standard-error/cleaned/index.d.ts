export = StandardError;

declare class StandardError {
	constructor(msg: string,props: StandardError.I__props);
}

declare namespace StandardError {
	export interface I__msg {
		'message': string;
		'code': number;
		'name': string;
	}

	export interface I__props {
		'code': number;
		'message': string;
		'name': string;
	}

}