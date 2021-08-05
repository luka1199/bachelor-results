export = GulpSort;

declare function GulpSort(params?: GulpSort.I__params | Function): DestroyableTransform;
declare namespace GulpSort {
	export interface I__params {
		'asc'?: boolean;
		'comparator'?: Function;
		'customSortFn'?: Function;
	}

}