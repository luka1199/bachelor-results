export = NodeSpriteGenerator;

declare function NodeSpriteGenerator(options: NodeSpriteGenerator.I__options | string): Function;
declare namespace NodeSpriteGenerator {
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