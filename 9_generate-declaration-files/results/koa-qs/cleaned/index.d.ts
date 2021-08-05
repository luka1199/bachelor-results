export = KoaQs;

declare function KoaQs(app: Application | KoaQs.I__app, mode: string): Application;
declare namespace KoaQs {
	export interface I__app {
		'request': object;
	}

}