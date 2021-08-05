export = HeaderParser;

declare class HeaderParser {
	constructor(cfg?: undefined);
	on(): HeaderParser | SBMH;
	push(data: string): number;
	_finish(): void;
	_parseHeader(): void;
	emit(): boolean;
}

declare namespace HeaderParser {
}