export = GulpInstall;

declare function GulpInstall(opts?: GulpInstall.I__opts): DestroyableTransform;
declare namespace GulpInstall {
	export interface I__opts {
		'production'?: boolean;
		'ignoreScripts'?: boolean;
		'args'?: Array<any> | string | number;
		'noOptional'?: boolean;
		'allowRoot'?: boolean;
	}

}