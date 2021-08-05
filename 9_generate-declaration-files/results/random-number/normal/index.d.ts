export = RandomNumber;

declare function RandomNumber(options: RandomNumber.I__options): number;
declare namespace RandomNumber {
	export interface I__options {
		'integer'?: boolean;
		'min'?: number;
		'max'?: number;
	}

}