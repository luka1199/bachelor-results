export interface I__object {
	'termType': string;
}

export interface I__quad {
	'object': I__object | Literal | BlankNode;
}

export function validateQuad(quad: Quad | I__quad): boolean;
