export = Message;

declare class Message {
	constructor(raw: object);
	toJson(): object;
	addData(): string | void;
	addDataWithKeyValue(key: string, value: string): void;
	addDataWithObject(obj: object | string): void;
	addNotification(): string | void;
}

declare namespace Message {
}