export interface I__params {
	'cwd'?: string;
	'env'?: object;
	'ignoreCase'?: boolean;
	'stream'?: string;
	'stripColors'?: boolean;
	'verbose'?: undefined;
}

export function spawn(command: string, params?: Array<any> | I__params, options?: undefined): object;
