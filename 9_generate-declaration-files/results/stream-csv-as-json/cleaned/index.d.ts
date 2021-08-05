export = ReadString;

declare class ReadString {
	constructor(string: string,quant?: undefined,options?: undefined);
	pipe(): Transform;
}

declare namespace ReadString {
}