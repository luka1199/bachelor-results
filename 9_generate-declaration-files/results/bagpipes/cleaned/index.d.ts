export interface I__options {
	'program'?: string;
	'bar'?: number | Array<any>;
	'plates'?: Array<any>;
	'warmup_round_to'?: number;
}

export class BarbellWeight {
	constructor(workingWeight: number,lift: string,options: I__options);
}

