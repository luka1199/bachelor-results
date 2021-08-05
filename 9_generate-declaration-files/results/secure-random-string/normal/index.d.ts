export = SecureRandomString;

declare function SecureRandomString(options?: Function | SecureRandomString.I__options, cb?: Function): void;
declare function SecureRandomString(options?: SecureRandomString.I__options, cb?: undefined): string;
declare namespace SecureRandomString {
	export interface I__options {
		'length'?: number;
		'alphanumeric'?: boolean;
	}

}