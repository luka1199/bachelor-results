export = OmitEmpty;

declare function OmitEmpty(obj: string, options?: undefined): string | void;
declare function OmitEmpty(obj: Array<any>, options?: undefined): Array<any>;
declare function OmitEmpty(obj: object, options?: OmitEmpty.I__options): object;
declare namespace OmitEmpty {
	export interface I__options {
		'omitZero': boolean;
	}

}