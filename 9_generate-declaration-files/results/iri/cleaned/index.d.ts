export class IRI {
	constructor(iri: string);
	scheme(): string | null;
	toNT(): string;
	n3(): string;
	defrag(): IRI;
	isAbsolute(): boolean;
	hierpart(): string;
	f(): string;
	fragment(): null | string;
	toAbsolute(): IRI;
	resolveReference(): IRI;
	authority(): string | null;
	path(): string;
	query(): null | string;
	host(): string;
	port(): null | string;
	userinfo(): null | string;
	nodeType(): string;
	toURIString(): string;
	toIRIString(): string;
	toString(): string;
}

