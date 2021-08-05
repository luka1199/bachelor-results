export = JsonDupKeyValidator;

declare function JsonDupKeyValidator(obj: object | Array<any>, opts?: Function | JsonDupKeyValidator.I__opts): string;
declare namespace JsonDupKeyValidator {
	export interface I__opts {
		'space'?: string | number;
		'cycles'?: boolean;
		'replacer'?: Function;
		'cmp'?: undefined;
	}

}