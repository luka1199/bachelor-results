export = BufferJson;

declare function BufferJson(val: number, total: number, opts?: BufferJson.I__opts): string;
declare namespace BufferJson {
	export interface I__opts {
		'decimal'?: number;
		'suffix'?: string;
	}

}