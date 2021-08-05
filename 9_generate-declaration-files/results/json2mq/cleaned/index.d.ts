export = Json2mq;

declare function Json2mq(query: object | Array<any> | Json2mq.I__query): string;
declare namespace Json2mq {
	export interface I__query {
		'length': number;
	}

}