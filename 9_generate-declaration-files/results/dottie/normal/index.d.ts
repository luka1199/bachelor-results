export interface I__zoo {
	'[object Object]'?: undefined;
}

export interface I__object {
	'zoo': I__zoo | string;
	'foo': I__foo | object;
	'false': I__false | object;
	'null': I__null | object;
	'nullvalue': null;
	'nested.dot': I__nested.dot | object;
}

export interface I__bar {
	'baz'?: undefined;
}

export interface I__foo {
	'bar': I__bar;
	'zoo'?: undefined;
}

export interface I__false {
	'value': boolean;
}

export interface I__null {
	'value': null;
}

export interface I__nested.dot {
	'key': string;
}

export interface I__object__1 {
	'foo': string | object;
	'bar': string;
	'baz': object;
}

export interface I__object__2 {
	'a': number;
	'b': number | object;
	'hasOwnProperty%%PROXY_METHOD%%': Function;
	'toString%%PROXY_METHOD%%': Function;
	'e': number;
	'c': number;
	'd': object;
}

export interface I__foo__3 {
	'bar': string | object;
}

export interface I__object__4 {
	'foo': object | I__foo__3 | I__foo;
	'level1': object;
	'values'?: object;
	'some.dot.containing': object;
}

export interface I__path {
	'0': string;
	'1': string;
	'length': number;
}

export interface I__options {
	'force': boolean;
}

export interface I__object__5 {
	'user.name': string;
	'user.email': string;
	'user.location.country': string;
	'user.location.city': string;
	'user': I__user;
	'project.title': string;
	'customer.name': string;
	'customer.age': number;
	'client': string;
	'section.id': number;
	'section.layout': null;
	'client.name': string;
	'client.age': number;
	'customer': string;
	'user_email': string;
	'user_location_country': string;
	'user_location_city': string;
	'project_title': string;
}

export interface I__location {
	'city': string;
}

export interface I__user {
	'location': object | I__location;
	'email': string;
}

export interface I__options__6 {
	'delimiter': string;
}

export function find(path: string, object: object): void;
export function get(object?: I__object | object, path?: string | null | Array<any>, defaultVal?: undefined): void;
export function get(object?: object | I__object, path?: string, defaultVal?: string): string;
export function flatten(object: I__object__1 | I__object, seperator?: string): object;
export function paths(object: I__object__2 | I__object, prefixes?: Array<any>): Array<any>;
export function set(object: I__object__4 | I__object, path: string | Array<any> | I__path, value: string, options?: I__options): void;
export function transform(object: I__object__5 | I__object, options?: I__options__6): object;
export function transform(object: Array<any>, options?: undefined): Array<any>;
export function hasOwnProperty(): boolean;
