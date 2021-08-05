export = Cache;

declare class Cache {
	constructor(options?: undefined);
	clean(): void;
	set(key: string, value: string, timeout?: number): void;
	on(): Cache;
	emit(): boolean;
	get(key: string): string | null;
	remove(key: string): string | null;
	removeAllListeners(): Cache;
}

declare namespace Cache {
	export interface I__options {
		'timeout'?: undefined;
		'doesNotRenewTimeout'?: boolean;
		'timeoutDisabled'?: boolean;
	}

}