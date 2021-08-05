export interface I__modules {
	'events': string;
}

export interface I__opts {
	'filename'?: string;
	'basedir'?: undefined;
	'paths'?: undefined;
	'browser'?: undefined;
	'modules': I__modules;
}

export function sync(id: string, opts: I__opts): string;
