export = GzipJs;

declare function GzipJs(params?: GzipJs.I__params | Function): DestroyableTransform;
declare namespace GzipJs {
	export interface I__params {
		'asc'?: boolean;
		'comparator'?: Function;
		'customSortFn'?: Function;
	}

}