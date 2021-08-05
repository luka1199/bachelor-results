export = DumbPasswords;

declare function DumbPasswords(str?: string | null, max?: number, opts?: DumbPasswords.I__opts): string;
declare namespace DumbPasswords {
	export interface I__opts {
		'ellipse'?: string;
		'chars'?: Array<any>;
		'max'?: number;
		'truncate'?: boolean | null | string;
	}

}