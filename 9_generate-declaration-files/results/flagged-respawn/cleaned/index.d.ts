export = FlaggedRespawn;

declare function FlaggedRespawn(flags: Array<any>, argv: Array<any> | FlaggedRespawn.I__argv): Array<any>;
declare namespace FlaggedRespawn {
	export interface I__argv {
		'0': string;
		'1': string;
	}

}