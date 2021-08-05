export = YauzlPromise;

declare function YauzlPromise(yauzl: YauzlPromise.I__yauzl, Promise: Function): void;
declare namespace YauzlPromise {
	export interface I__prototype {
		'close'?: undefined;
		'readEntry'?: undefined;
		'openReadStream'?: undefined;
	}

	export interface I__ZipFile {
		'prototype': I__prototype | f;
	}

	export interface I__Entry {
		'prototype': f;
	}

	export interface I__yauzl {
		'ZipFile': I__ZipFile;
		'Entry': I__Entry | Function;
	}

}