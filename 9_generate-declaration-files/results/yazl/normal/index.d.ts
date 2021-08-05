export interface I__buffer {
	'length': number;
}

export interface I__options {
	'size'?: undefined;
}

export interface I__buffer__1 {
	'length': number;
}

export interface I__options__2 {
	'size': null;
}

export interface I__options__3 {
	'forceZip64Format': boolean;
}

export interface I__buffer__4 {
	'length': number;
}

export interface I__options__5 {
	'size': null;
}

export interface I__options__6 {
	'forceZip64Format': boolean;
}

export interface I__buffer__7 {
	'length': number;
}

export interface I__options__8 {
	'size': null;
}

export interface I__options__9 {
	'forceZip64Format': boolean;
}

export interface I__buffer__10 {
	'length': number;
}

export interface I__options__11 {
	'size': null;
}

export interface I__options__12 {
	'forceZip64Format': boolean;
}

export interface I__buffer__13 {
	'length': number;
}

export interface I__options__14 {
	'size': null;
}

export interface I__options__15 {
	'forceZip64Format': boolean;
}

export interface I__buffer__16 {
	'length': number;
}

export interface I__options__17 {
	'size': null;
}

export interface I__options__18 {
	'forceZip64Format': boolean;
}

export interface I__buffer__19 {
	'length': number;
}

export class ZipFile {
	constructor();
	addFile(realPath: string, metadataPath: string, options?: object): void;
	addReadStream(readStream: ReadStream | BufferList, metadataPath: string, options?: object): void;
	addBuffer(buffer: Buffer | I__buffer | I__buffer__1 | I__buffer__4 | I__buffer__7 | I__buffer__10 | I__buffer__13 | I__buffer__16 | I__buffer__19, metadataPath: string, options?: I__options | I__options__2 | I__options__5 | I__options__8 | I__options__11 | I__options__14 | I__options__17): void;
	end(options: Function | I__options__3 | I__options__6 | I__options__9 | I__options__12 | I__options__15 | I__options__18, finalSizeCallback?: Function): void;
	addEmptyDirectory(metadataPath: string, options?: undefined): void;
}

