export = KoaCompose;

declare function KoaCompose(middleware: Function | Array<any> | KoaCompose.I__middleware): Function;
declare namespace KoaCompose {
	export interface I__middleware {
		'0': Function;
		'length': number;
	}

}