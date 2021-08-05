export = NodeRal;

declare function NodeRal(options: NodeRal.I__options | string): Function;
declare namespace NodeRal {
	export interface I__options {
		'src': string;
		'dest'?: string;
		'root'?: undefined;
		'force'?: undefined;
		'response'?: undefined;
		'debug'?: boolean;
		'beepOnError'?: undefined;
		'indentedSyntax'?: boolean;
		'sourceMap'?: boolean;
		'maxAge'?: number;
		'log'?: Function;
		'compile'?: undefined;
		'prefix'?: string;
		'outFile'?: undefined;
		'includePaths'?: undefined;
	}

}