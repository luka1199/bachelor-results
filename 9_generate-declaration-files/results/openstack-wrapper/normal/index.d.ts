export = Glance;

declare class Glance {
	constructor(endpoint_url: string,auth_token: string);
	getRequestOptions(path: string, json_value: object | boolean | Array<any>, extra_headers?: Glance.I__extra_headers): object;
	setRequest(request_lib: object): void;
	listImages(cb: Function): void;
	mangleObject(obj_type: string, obj: object): object;
	getImage(id: string, cb: Function): void;
	queueImage(data: Glance.I__data, cb: Function): void;
	updateImage(id: string, data: Glance.I__data__1 | Glance.I__data, cb: Function): void;
	removeImage(id: string, cb: Function): void;
}

declare namespace Glance {
	export interface I__extra_headers {
		'extra_header': string;
		'Content-Type': string;
	}

	export interface I__data {
		'name'?: undefined;
		'visibility'?: undefined;
		'tags'?: undefined;
		'disk_format'?: undefined;
		'container_format'?: undefined;
	}

	export interface I__data__1 {
		'name'?: undefined;
		'visibility'?: undefined;
		'protected'?: undefined;
		'tags'?: undefined;
	}

}