export class Reader {
	constructor(opts?: undefined);
	on(): Reader;
	resume(): void;
	emit(): boolean;
	_passthrough(): void;
}

