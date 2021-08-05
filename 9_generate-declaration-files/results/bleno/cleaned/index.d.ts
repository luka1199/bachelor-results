export = Characteristic;

declare class Characteristic {
	constructor(options: Characteristic.I__options);
	toString(): string;
	emit(): boolean;
}

declare namespace Characteristic {
	export interface I__options {
		'uuid'?: string;
		'properties'?: I__properties;
		'secure'?: I__secure;
		'value'?: I__value;
		'descriptors'?: I__descriptors;
		'onReadRequest'?: I__onReadRequest | Function;
		'onWriteRequest'?: I__onWriteRequest | Function;
		'onSubscribe'?: I__onSubscribe | Function;
		'onUnsubscribe'?: I__onUnsubscribe | Function;
		'onNotify'?: I__onNotify | Function;
		'onIndicate'?: I__onIndicate | Function;
	}

	export interface I__properties {
		'should': object;
	}

	export interface I__secure {
		'should': object;
	}

	export interface I__value {
		'should': object;
	}

	export interface I__descriptors {
		'should': object;
	}

	export interface I__onReadRequest {
		'should': object;
	}

	export interface I__onWriteRequest {
		'should': object;
	}

	export interface I__onSubscribe {
		'should': object;
	}

	export interface I__onUnsubscribe {
		'should': object;
	}

	export interface I__onNotify {
		'should': object;
	}

	export interface I__onIndicate {
		'should': object;
	}

}