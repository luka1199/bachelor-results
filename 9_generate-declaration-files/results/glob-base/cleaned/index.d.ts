export = GlobBase;

declare function GlobBase(glob: string, opts?: GlobBase.I__opts): RegExp;
declare namespace GlobBase {
	export interface I__opts {
		'extended'?: boolean;
		'globstar'?: boolean;
		'flags'?: string;
	}

}