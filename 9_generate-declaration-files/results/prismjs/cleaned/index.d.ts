export interface I__tokenStream {
	'type': string;
	'content': string | Array<any>;
}

export function simplify(tokenStream: string): string;
export function simplify(tokenStream: I__tokenStream | Array<any>): Array<any>;
