export = Vary;

declare function Vary(res: ServerResponse | Vary.I__res, field: string | Array<any>): void;
declare namespace Vary {
	export interface I__res {
		'getHeader': Function;
		'setHeader': Function;
	}

}