export = HttpError;

declare class HttpError {
	constructor(code: number,msg?: undefined,props?: undefined);
	toString(): string;
}

declare namespace HttpError {
	export interface I__code {
		'must': Must;
	}

}