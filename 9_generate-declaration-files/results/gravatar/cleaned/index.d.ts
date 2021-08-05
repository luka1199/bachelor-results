export interface I__options {
	'cdn'?: undefined;
	'protocol'?: string;
}

export interface I__options__1 {
	'format'?: undefined;
	'cdn'?: string;
	'protocol'?: string;
}

export function url(email?: string | null | object, options?: I__options, protocol?: boolean): string;
export function profile_url(email: string | null, options: I__options__1 | I__options, https?: boolean): string;
