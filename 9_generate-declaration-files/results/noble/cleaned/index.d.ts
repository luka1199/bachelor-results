export = Characteristic;

declare class Characteristic {
	constructor(noble: object,peripheralId: string,serviceUuid: string,uuid: string,properties: Array<any>);
	toString(): string;
	read(callback?: Function): void;
	on(): Characteristic;
	emit(): boolean;
	removeListener(): Characteristic;
	write(data: Buffer, withoutResponse: boolean, callback?: Function): void;
	once(): Characteristic | Descriptor | Peripheral | Service;
	broadcast(broadcast: boolean, callback?: Function): void;
	notify(notify: boolean, callback?: Function): void;
	subscribe(callback?: Function): void;
	unsubscribe(callback?: Function): void;
	discoverDescriptors(callback?: Function): void;
}

declare namespace Characteristic {
	export interface I__uuid {
		'should': object;
	}

}