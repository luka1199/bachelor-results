export = MemoryFileSystem;

declare class MemoryFileSystem {
	constructor(data: MemoryFileSystem.I__data);
	readdirSync(_path: string): Array<any>;
	mkdirSync(_path: string): void;
	normalize(path: string): string;
	mkdirpSync(_path: string): void;
	writeFileSync(_path: string, content: Buffer | string, encoding?: string): void;
	readFileSync(_path: string, encoding?: undefined): Buffer;
	readFileSync(_path: string, encoding?: string): string;
	writeFile(path: string, content: Buffer, encoding: Function, callback?: undefined): void;
	createWriteStream(path: string, options?: undefined): Writable;
	createReadStream(path: string, options?: MemoryFileSystem.I__options): Readable;
	join(path: string, request: string): string;
	statSync(_path: string): object;
	meta(_path: string): object | Buffer | void | null;
	_remove(_path: string, name: string, testFn: Function): void;
}

declare namespace MemoryFileSystem {
	export interface I__data {
		'a': object | I__a;
		'C:': object | I__C:;
	}

	export interface I__a {
		'index': Buffer;
		'dir': object | I__dir;
		'': boolean;
	}

	export interface I__dir {
		'index': Buffer;
	}

	export interface I__C: {
		'a': object | I__a;
	}

	export interface I__options {
		'start': number;
		'end': number;
	}

}