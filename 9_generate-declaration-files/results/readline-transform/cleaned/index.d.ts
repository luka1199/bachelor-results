export = ReadlineTransform;

declare class ReadlineTransform {
	constructor(options: ReadlineTransform.I__options);
}

declare namespace ReadlineTransform {
	export interface I__options {
		'breakMatcher'?: string;
		'skipEmpty'?: boolean;
		'ignoreEndOfBreak': boolean;
	}

}