export = NodeSassTildeImporter;

declare function NodeSassTildeImporter(options: NodeSassTildeImporter.I__options | string): Function;
declare namespace NodeSassTildeImporter {
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