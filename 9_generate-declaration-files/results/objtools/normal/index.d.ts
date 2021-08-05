export = Objtools;

declare function Objtools(res: ServerResponse | Objtools.I__res, listener: Function): void;
declare namespace Objtools {
	export interface I__res {
		'writeHead': Function;
	}

}