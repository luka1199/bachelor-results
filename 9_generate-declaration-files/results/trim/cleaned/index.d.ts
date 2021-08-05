export = Trim;

declare function Trim(str: string | Trim.I__str | String): string;
declare namespace Trim {
	export interface I__str {
		'trim': Function | null;
	}

}