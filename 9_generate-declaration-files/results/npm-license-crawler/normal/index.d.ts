export = DirectoryReader;

declare class DirectoryReader {
	constructor(dirs: string,excludeDirs?: undefined);
	on(): DirectoryReader;
	_isExcludedDir(): boolean;
	_pushDir(nextCB: Function, errorCB?: Function): DirectoryReader;
	next(): void;
	_cwd(): object;
	emit(): boolean;
	list(): void;
}

declare namespace DirectoryReader {
}