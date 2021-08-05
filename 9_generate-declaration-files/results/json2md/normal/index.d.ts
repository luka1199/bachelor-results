export = Json2md;

declare function Json2md(data: string | Json2md.I__data | Array<any> | number, prefix?: string, _type?: undefined): string;
declare namespace Json2md {
	export interface I__data {
		'h1': string;
		'h2': string;
		'h3': string;
		'h4': string;
		'h5': string;
		'h6': string;
		'blockquote': string | number;
		'img': object;
		'ul': I__ul;
		'ol': I__ol;
		'code': object;
		'p': I__p;
		'sayHello': string;
		'table': object;
	}

	export interface I__ul {
		'0': string | I__0;
		'1': string;
		'length': number;
	}

	export interface I__ol {
		'0': string | I__0;
		'1': string;
		'length': number;
	}

	export interface I__p {
		'0': string;
		'1': string;
		'length': number;
	}

	export interface I__0 {
		'0': string;
		'1': object;
		'length': number;
	}

}