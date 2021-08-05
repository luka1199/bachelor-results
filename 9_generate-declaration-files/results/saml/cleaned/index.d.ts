export = Factory;

declare class Factory {
	constructor();
	use(name: Function | Factory.I__name | string, mech?: Function): Factory;
	create(mechs: Array<any>): null;
	create(mechs: Array<any> | Factory.I__mechs): f | null;
}

declare namespace Factory {
	export interface I__prototype {
		'name': string;
	}

	export interface I__name {
		'prototype': I__prototype | BarMechanism;
	}

	export interface I__mechs {
		'0': string;
		'1': string;
		'length': number;
	}

}