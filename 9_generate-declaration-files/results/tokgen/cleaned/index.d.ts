export = TokenGenerator;

declare class TokenGenerator {
	constructor(options?: undefined);
	generate(length?: number, callback?: undefined): string;
	generate(length?: Function | number, callback?: Function): void;
}

declare namespace TokenGenerator {
}