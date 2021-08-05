export = AsyncBusboy;

declare function AsyncBusboy(request: PassThrough | AsyncBusboy.I__request, options?: undefined): Promise;
declare namespace AsyncBusboy {
	export interface I__request {
		'headers': object;
	}

}