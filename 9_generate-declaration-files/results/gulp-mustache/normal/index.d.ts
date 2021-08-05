export = GulpMustache;

declare function GulpMustache(view: object | string, options?: GulpMustache.I__options, partials?: object): DestroyableTransform;
declare namespace GulpMustache {
	export interface I__options {
		'tags'?: I__tags | Array<any>;
		'extension'?: string;
	}

	export interface I__tags {
		'0': string;
		'1': string;
	}

}