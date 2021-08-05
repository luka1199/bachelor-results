export = Rsync;

declare class Rsync {
	constructor(config?: undefined);
	flags(flags: string, set?: undefined): Rsync;
	set(option: string, value?: string): Rsync;
	exclude(): Rsync;
}

declare namespace Rsync {
}