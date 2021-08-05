export = SetValue;

declare function SetValue(obj: string, path?: string, value?: string, options?: undefined): string;
declare function SetValue(obj: null, path?: string, value?: string, options?: undefined): null;
declare function SetValue(obj: object | SetValue.I__obj, path?: string, value?: string | object | Function | Date | number | boolean, options?: object): object;
declare namespace SetValue {
	export interface I__obj {
		'a'?: object | I__a | Array<any>;
		'b'?: object | I__b | Array<any>;
		'helpers'?: object | I__helpers;
		'a.b'?: object;
		'e.f'?: I__e.f;
		'foo': object | I__foo;
		'https://github'?: object;
	}

	export interface I__c {
		'd'?: object;
		'd"'?: object;
	}

	export interface I__b {
		'c'?: string | I__c;
		'locals': object | I__locals;
	}

	export interface I__a {
		'0'?: object | I__0;
		'1'?: object | I__1;
		'2'?: object | I__2;
		' '?: object;
		'b'?: I__b;
		'locals'?: object;
		'"b'?: object;
		'b.c.d'?: object;
		'[b.c.d]'?: object;
		'(b.c.d)'?: object;
		'<b.c.d>'?: object;
		'{b.c.d }'?: object;
	}

	export interface I__0 {
		'a': object;
	}

	export interface I__1 {
		'b': object;
	}

	export interface I__2 {
		'c': object;
	}

	export interface I__foo {
		'warning': Function;
		'bar': object;
	}

	export interface I__helpers {
		'foo': I__foo | Function;
	}

	export interface I__locals {
		'name': object;
	}

	export interface I__e.f {
		'g.h.i'?: object;
	}

}