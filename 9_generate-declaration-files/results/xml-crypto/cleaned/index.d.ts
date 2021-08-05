export interface I__options {
	'inclusiveNamespacesPrefixList'?: string;
	'defaultNs'?: undefined;
	'defaultNsForPrefix'?: object;
	'ancestorNamespaces'?: undefined;
}

export interface I__node {
	'nodeType': number;
	'data'?: string;
	'tagName': string;
	'childNodes': object | I__childNodes;
}

export interface I__childNodes {
	'0': Text | Element | Comment | CDATASection;
	'1': Element | Text;
	'2': Element | Text;
	'3': Element;
	'4': Element | Text;
	'5': Element;
	'6': Element | Text;
	'7': Element;
	'8': Text;
	'9': Element;
	'10': Text;
	'11': Element;
	'12': Text;
	'13': Element;
	'14': Text;
	'15': Element;
	'16': Text;
	'17': Element;
	'18': Text;
	'19': Element;
	'20': Text;
	'length': number;
}

export interface I__attributes {
	'0': I__0;
	'1': I__1 | Attr;
	'2': I__2 | Attr;
	'3': I__3;
	'4': Attr | I__4;
	'5': I__5;
	'6': Attr;
	'7': I__7;
	'length': number;
}

export interface I__node__1 {
	'namespaceURI'?: string;
	'prefix': null | string;
	'attributes': object | I__attributes;
}

export interface I__0 {
	'prefix': string | null;
	'localName': string;
	'value': string;
	'namespaceURI': string;
}

export interface I__defaultNsForPrefix {
	'ds': string;
}

export interface I__1 {
	'localName': string;
	'value': string;
}

export interface I__2 {
	'prefix': string;
	'localName': string;
	'value': string;
	'namespaceURI': string;
}

export interface I__3 {
	'localName': string;
	'namespaceURI': string;
	'prefix': string;
}

export interface I__5 {
	'value': string;
}

export interface I__7 {
	'localName': string;
}

export interface I__4 {
	'prefix': string;
	'namespaceURI': string;
}

export interface I__attributes__2 {
	'0': I__0__4 | I__0;
	'1': I__1__5 | I__1;
	'2': I__2__6 | Attr;
	'3': I__3__7;
	'4': I__4__8 | Attr;
	'5': Attr;
	'6': I__6 | Attr;
	'7': Attr;
	'length': number;
}

export interface I__node__3 {
	'nodeType': number;
	'attributes': object | I__attributes__2 | I__attributes;
}

export interface I__0__4 {
	'name': string;
}

export interface I__1__5 {
	'name': string;
}

export interface I__2__6 {
	'name': string;
}

export interface I__3__7 {
	'name': string;
}

export interface I__4__8 {
	'name': string;
}

export interface I__6 {
	'name': string;
}

export interface I__node__9 {
	'ownerDocument': Document;
	'parentNode': Element;
	'data': string;
}

export class ExclusiveCanonicalization {
	constructor();
	process(node: Element, options: I__options): string;
	processInner(node: Text | I__node | Element | Comment | CDATASection, prefixesInScope: Array<any>, defaultNs: string, defaultNsForPrefix: object, inclusiveNamespacesPrefixList: Array<any>): string;
	renderNs(node: Element | I__node__1 | I__node, prefixesInScope: Array<any>, defaultNs: string, defaultNsForPrefix: object | I__defaultNsForPrefix, inclusiveNamespacesPrefixList: Array<any>): object;
	renderAttrs(node: Element | I__node__3 | I__node, defaultNS: string): string;
	renderComment(node: Comment | I__node__9): string;
}

