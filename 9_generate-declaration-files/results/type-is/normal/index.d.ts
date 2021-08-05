export = TypeIs;

declare function TypeIs(req: TypeIs.I__req, types_?: Array<any> | string): string | boolean;
declare function TypeIs(req: object, types_?: Array<any> | string): null;
declare namespace TypeIs {
	export interface I__headers {
		'content-type': string;
	}

	export interface I__req {
		'headers': I__headers | object;
	}

}