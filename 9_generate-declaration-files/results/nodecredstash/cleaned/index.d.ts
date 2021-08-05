export = MailgunTransport;

declare class MailgunTransport {
	constructor(options: object);
	send(mail: MailgunTransport.I__mail, callback: Function): void;
}

declare namespace MailgunTransport {
	export interface I__template {
		'name': string;
		'engine': string;
		'context': object;
	}

	export interface I__data {
		'template': object | I__template;
	}

	export interface I__mail {
		'data': I__data;
	}

}