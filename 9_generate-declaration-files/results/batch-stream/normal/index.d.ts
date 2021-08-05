export = BatchStream;

declare class BatchStream {
	constructor(options: BatchStream.I__options);
	once(): BatchStream;
	push(): boolean;
	read(): Array<any>;
}

declare namespace BatchStream {
	export interface I__options {
		'highWaterMark'?: number;
		'size': number;
	}

}