export = Supertest;

declare function Supertest(superagent: Function | Supertest.I__superagent): Function;
declare namespace Supertest {
	export interface I__prototype {
		'retry': Function;
	}

	export interface I__Request {
		'prototype': Request | I__prototype;
	}

	export interface I__superagent {
		'Request': I__Request;
	}

}