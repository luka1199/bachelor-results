export = FlakeIdGen;

declare class FlakeIdGen {
	constructor(options: FlakeIdGen.I__options);
	next(cb?: undefined): Buffer;
	next(): void;
}

declare namespace FlakeIdGen {
	export interface I__options {
		'id'?: number;
		'epoch'?: undefined;
		'seqMask'?: number;
		'datacenter'?: undefined;
		'worker'?: undefined;
	}

}