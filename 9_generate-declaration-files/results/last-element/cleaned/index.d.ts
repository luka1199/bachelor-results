export = LastElement;

declare function LastElement(arr?: Array<any> | LastElement.I__arr): number | Array<any> | object;
declare function LastElement(arr?: undefined): TypeError;
declare namespace LastElement {
	export interface I__arr {
		'0': number;
		'3': number | object | Array<any>;
		'length': number;
	}

}