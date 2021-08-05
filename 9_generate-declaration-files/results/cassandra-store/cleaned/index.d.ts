export = CassandraStore;

declare class CassandraStore {
	constructor(opts: CassandraStore.I__opts,callback: Function);
}

declare namespace CassandraStore {
	export interface I__opts {
		'clientOptions': object;
		'client'?: undefined;
		'table': string;
	}

}