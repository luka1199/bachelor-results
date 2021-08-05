export = Tableau;

declare function Tableau(alpha: Array<any> | Tableau.I__alpha, algo?: Function): Array<any>;
declare namespace Tableau {
	export interface I__alpha {
		'0': string;
		'1': string;
		'2': string;
		'length': number;
	}

}