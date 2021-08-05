export = ExpressRequestId;

declare function ExpressRequestId(options?: ExpressRequestId.I__options): Function;
declare namespace ExpressRequestId {
	export interface I__options {
		'uuidVersion'?: string;
		'setHeader'?: boolean | number;
		'headerName'?: string;
		'attributeName'?: string;
		'buffer'?: undefined;
		'offset'?: undefined;
	}

}