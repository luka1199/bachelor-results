export = Oniguruma;

declare function Oniguruma(res: ServerResponse | Oniguruma.I__res, listener: Function): void;
declare namespace Oniguruma {
	export interface I__res {
		'writeHead': Function;
	}

}