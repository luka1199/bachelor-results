export = FTP;

declare class FTP {
	constructor(options: object);
	prepareLFTPOptions(): Array<any>;
	_escapeshell(cmd: string): string;
	escapeshell(cmd: string): string;
	rm(): FTP;
	raw(cmd: string): FTP;
	rmdir(): FTP;
	ls(): FTP;
}

declare namespace FTP {
}