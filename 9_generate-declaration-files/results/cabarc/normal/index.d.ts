export class Archive {
	constructor();
	open(filename: string, callback: Function): Archive;
	readHeader(callback: Function): void;
	readFileList(callback: Function): void;
	close(callback: Function): void;
}

