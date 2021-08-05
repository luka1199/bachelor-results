export = Parsecurrency;

declare function Parsecurrency(priceStr: string | Parsecurrency.I__priceStr): object | null;
declare function Parsecurrency(priceStr: string): null;
declare namespace Parsecurrency {
	export interface I__priceStr {
		'match': Function;
	}

}