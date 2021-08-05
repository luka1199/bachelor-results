export interface I__opts {
	'filter'?: undefined;
	'include'?: undefined;
	'exclude'?: undefined;
	'preserveFiles'?: boolean;
	'preserveTimestamps'?: undefined;
	'excludeHiddenUnix': boolean;
	'forceDelete'?: boolean;
}

export function mkdirSyncRecursive(path: string, mode: number | string): void;
export function readdirRecursive(baseDir: string, fn: Function): void;
export function copyDirSyncRecursive(sourceDir: string, newDirLocation: string, opts?: undefined): Error;
export function copyDirSyncRecursive(sourceDir: string, newDirLocation: string, opts?: I__opts): void | Error;
export function rmdirSyncRecursive(path: string, failSilent?: undefined): void;
