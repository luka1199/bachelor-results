export = FileSaver;

declare function FileSaver(bytes?: number, options?: FileSaver.I__options): object;
declare namespace FileSaver {
	export interface I__options {
		'fixed'?: number;
		'spacer'?: string;
	}

}