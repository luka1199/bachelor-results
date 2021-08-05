export = FileSize;

declare function FileSize(bytes?: number, options?: FileSize.I__options): object;
declare namespace FileSize {
	export interface I__options {
		'fixed'?: number;
		'spacer'?: string;
	}

}