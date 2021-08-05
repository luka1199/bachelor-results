export = Queue;

declare class Queue {
	constructor(process: Function,opts: Queue.I__opts);
	on(): Queue | Ticket | Worker;
	push(input: number | object, cb?: Function): Ticket;
	filter(input: number | object, cb: Function): void;
	_processNextAfterTimeout(): void;
	_queueTask(taskId?: string | number, newTask: number | object, ticket: Ticket | Tickets | Queue.I__ticket): void;
	_writeNextTask(): void;
	_processNextIfAllowed(): void;
	precondition(cb: Function): void;
	_processNext(): void;
	_getNextBatch(cb: Function): void;
	_startBatch(batch: Queue.I__batch, tickets: Queue.I__tickets | object, lockId: number | string): void;
	_emptied(): void;
	_drained(): void;
	destroy(cb?: undefined): void;
	pause(): void;
	priority(n: number, cb: Function): void;
	cancel(taskId: number | string, cb?: Function): void;
	merge(oldTask: object | Queue.I__a | Queue.I__a__1 | number, newTask: object | Queue.I__b | Queue.I__b__2 | number, cb: Function): void;
	id(n: number, cb: Function): void;
	getStats(): object;
	resetStats(): void;
}

declare namespace Queue {
	export interface I__opts {
		'process': Function;
		'filter'?: Function;
		'merge'?: Function;
		'precondition'?: Function;
		'id'?: string | Function;
		'priority'?: Function;
		'cancelIfRunning'?: boolean;
		'autoResume'?: boolean;
		'failTaskOnProcessException'?: boolean;
		'filo'?: boolean;
		'batchSize'?: number;
		'batchDelay'?: number;
		'batchDelayTimeout'?: number;
		'afterProcessDelay'?: number;
		'concurrent'?: number;
		'maxTimeout'?: number;
		'maxRetries'?: number;
		'retryDelay'?: undefined;
		'storeMaxRetries'?: number;
		'storeRetryTimeout'?: number;
		'preconditionRetryTimeout'?: number;
		'store'?: MemoryStore | object;
	}

	export interface I__process {
		'process': Function;
		'filter'?: undefined;
		'merge'?: undefined;
		'precondition'?: undefined;
		'id'?: undefined;
		'priority'?: undefined;
		'cancelIfRunning'?: undefined;
		'autoResume'?: undefined;
		'failTaskOnProcessException'?: undefined;
		'filo'?: undefined;
		'batchSize': number;
		'batchDelay'?: undefined;
		'batchDelayTimeout'?: undefined;
		'afterProcessDelay'?: undefined;
		'concurrent'?: undefined;
		'maxTimeout'?: undefined;
		'maxRetries'?: undefined;
		'retryDelay'?: undefined;
		'storeMaxRetries'?: undefined;
		'storeRetryTimeout'?: undefined;
		'preconditionRetryTimeout'?: undefined;
		'store'?: undefined;
	}

	export interface I__ticket {
		'tickets': Array<any>;
	}

	export interface I__batch {
		'0': object;
		'1': object | number;
		'2': object | number;
		'231ff46d-79bd-4da4-81c1-a811ecb005e0': number;
		'95fadb8e-82c1-4eee-b620-029d19e6650f': number;
		'5a85e9e3-01ee-4a78-b44c-d398794ee0db': number;
		'ef12cd09-c5a9-4ee9-955d-df95b6846394': number;
		'efde6481-66a1-4598-a8b8-64c498f9d15b': number;
		'373f93e0-c464-48aa-87bb-11e054064e51': number;
		'ef360184-9df7-40b1-837f-7d84e768ff8e': number;
		'9a46bd7d-737b-43fb-9888-283e4f06a7db': number;
		'bd55f40f-6474-479f-8696-e5cac814b227': number;
		'0b4ed0d0-19fc-46bf-8305-3e0d726b0f97': number;
		'43391c8c-38ac-42aa-804d-be7501133c6f': number;
		'6e1da1c0-2e2e-4211-a549-294b27dafb95': number;
		'dbb532f7-2003-4c0d-aead-3a3da9cbfb9b': number;
		'5809fd35-59e1-4185-a381-8111a113ce40': number;
		'f38a6f8c-f6d1-465f-803e-c479c6c29e6d': number;
		'7ab21081-8e3a-47cc-8632-c11d33b84fe2': number;
		'2abf87d3-b372-4983-a95f-7c682d39bb73': number;
		'3092d3ae-c5b4-4bc6-a9dc-9990c4098fac': number;
		'4384b939-2753-47fe-a353-76ded81fadf0': number;
		'198a0903-2c57-4070-aecc-1ae33d6503c4': number;
		'1e1183fa-b2ef-4e7d-88a7-4200bfdc32e4': number;
		'f32959de-b612-49ab-9570-4c9d0ce3dab7': number;
		'4f19a45e-786f-4853-b55a-31be5ad73c87': number;
		'b414a21e-2376-4121-9711-5065aae2f2d2': number;
		'dd915538-c192-4467-be4b-07142ec60faf': number;
		'8a7900e9-b437-49c4-9c4c-8e699733aa52': number;
		'ca573363-538e-4ac9-aee6-84e11402da52': number;
		'572d14ad-2e63-4983-afbe-6ae498b2f019': number;
		'04ed06d7-fe00-49d1-ab96-813330e282fa': number;
		'c58618ef-3e2f-4131-b1f7-cdc824882953': number;
		'5fcb695c-5cbf-4c6e-917d-65804e1559e8': number;
		'8be879f5-04f5-44e5-ae28-863a355a76a6': number;
		'6dc99db4-7055-48ee-91e3-f5ece162683e': number;
		'25ff77b5-7d81-4e8a-bc2e-ee1ba0740c2d': number;
		'02000fc3-e6cd-4f6e-9182-40683e5c5dd7': number;
		'a': object;
		'b00056e6-8cf8-441e-a47a-2d4eee0a97e1': number;
		'c3e75e9c-4ab5-4e5a-9a81-8dd8dca57f1e': number;
		'8dce960b-0fe2-4838-b852-559ece6fc2de': number;
		'0457e8c3-769a-4bb7-8639-407595c026f6': number;
		'989b73c2-5a34-43e7-a4b2-0fc1a3daf732': number;
		'fd34c21f-58d2-49b7-88e0-d4e8884ca482': number;
		'0f5fd90c-80a9-48c1-a810-d94b103a6e8d': number;
		'f1952652-4d78-4fe2-a4fd-6f1e25eefca3': number;
		'55873d88-52a1-45af-8b26-aaa156d5cdde': number;
		'fc44d19b-d417-4535-ab93-8ce400207133': number;
		'3aeb6e85-ae1e-4a8b-9e76-bd57423cdf92': number;
		'de784831-787c-4e48-b304-b90f22ae1f3e': number;
		'd48c1321-1390-4b64-9b5a-37a6ed3bbd6f': number;
		'4a099628-b898-4074-926b-47c97d89db88': number;
		'7b525cca-b197-486d-b353-18cfb0efd3ae': number;
		'60417c00-1606-46df-a2ca-ba7fec66a605': number;
		'b1d77b21-aad8-42ea-b6bb-86c3b4cb07f1': number;
		'954c9cd1-9975-499d-94f2-9503db3826ba': number;
		'db153506-8f63-4ece-b4cb-2f9479704092': number;
		'e0b4739b-54fb-42ce-8382-5f886c6eef5e': number;
		'1699a0ea-0ff9-46de-9757-d58c6da0355c': number;
		'49c46e5b-5562-4efa-b9a2-2dc1b5bb549c': number;
		'378b7e99-7783-49e0-8f29-94337d74b0a2': number;
		'a88ae106-9f0b-4ff7-a954-95c06eea4155': number;
		'31410379-72c6-4578-bd35-cd8f1bc0f35a': number;
		'882ba971-f45a-4056-8650-48fca0f093b8': number;
		'f9f255e4-562a-4f3e-a5d1-6608f7cbd902': number;
		'3ecaac38-52a1-4b17-a2b1-5e4275745160': number;
		'3604d1ae-22d0-4ad9-a73f-cf71f9ae1a67': number;
		'81e6e4f6-24e9-4e2f-8a51-a35a426f2b22': number;
		'711cc300-10a3-4ca4-b394-2bf96f3787f0': number;
		'efea0cad-50f1-47de-b1ca-b5395d57bf09': number;
		'e7815ab0-acd8-4820-a8a2-bcd4612fe1bc': number;
		'80f5d09b-8989-4007-8fe5-1fc79ba26d5e': number;
		'6b378893-4627-4752-90dc-d7ba219bb7e2': number;
		'efa1126b-f263-459e-b36d-26012fba767a': number;
		'b034f126-2106-4d77-a4ba-df3d41f2caa6': number;
		'b63993a5-a976-400d-8941-5f77db57d500': number;
		'd751247c-04a5-4e24-9014-5a8feff9bf01': number;
		'720a3557-0711-478e-9244-a4253ca89db6': number;
		'fe39aee4-72b8-4642-a921-8e1953ff1d89': number;
		'16791069-1135-4731-a001-fdb7ac6bb098': number;
		'b3ea8070-b82d-44ec-80f0-e8e750eacc3c': number;
		'8723e015-fa6a-4691-be88-00c77669fe81': number;
		'6d483be9-52b3-4256-b769-a88fb311cb84': number;
		'john': object;
		'mary': object;
		'jim': object;
		'odd': number;
		'even': number;
		'bd95b64d-3b15-494a-af39-73ede869ad9d': number;
		'f8db13ac-dc76-4b9e-b2eb-ab2f16c7d8c9': number;
		'a520535d-de8f-4228-a894-2677549dd047': number;
		'5d0b7150-299d-4b98-9d5b-21d018e82651': number;
		'5724cf16-2539-4e9d-8141-22c2884c25f9': number;
		'06dc3414-933e-4b8a-b813-8c1d883d8b9e': number;
		'528422f1-b45f-4875-98e9-177639a8814e': number;
		'850e0659-c2dc-41b4-8e5b-eb64d4b727f4': number;
		'daf7079e-b0b8-4c78-94a4-e4505dbb7f1d': number;
		'1c23af76-236b-48ee-8e06-d43050d7c2a4': number;
		'7c4db283-cf6b-4122-86fd-08e225b43c5b': number;
		'fec6fadc-cb6c-4411-b5b9-843b3a3711b5': number;
		'db6a94b6-2ea9-49bb-9c03-fb936efdba37': number;
		'00409443-6f06-4067-837e-ac2a25b9f22a': number;
		'e141ad30-ecd1-420c-b12e-8ee83578dd65': number;
		'26d0919f-f2e9-4245-8e27-2bad19204c94': number;
		'18125f12-d6ef-475a-9fda-9608a62bd1c5': number;
		'8f8fcaf3-9642-4594-9620-3dca8cccf8c4': number;
		'9da72065-f797-474e-9ab3-684d92dcd42a': number;
		'task-id': number;
	}

	export interface I__tickets {
		'0': Tickets;
		'1': Tickets;
		'2': Tickets;
		'231ff46d-79bd-4da4-81c1-a811ecb005e0': Tickets;
		'95fadb8e-82c1-4eee-b620-029d19e6650f': Tickets;
		'ef12cd09-c5a9-4ee9-955d-df95b6846394': Tickets;
		'efde6481-66a1-4598-a8b8-64c498f9d15b': Tickets;
		'373f93e0-c464-48aa-87bb-11e054064e51': Tickets;
		'ef360184-9df7-40b1-837f-7d84e768ff8e': Tickets;
		'9a46bd7d-737b-43fb-9888-283e4f06a7db': Tickets;
		'bd55f40f-6474-479f-8696-e5cac814b227': Tickets;
		'0b4ed0d0-19fc-46bf-8305-3e0d726b0f97': Tickets;
		'43391c8c-38ac-42aa-804d-be7501133c6f': Tickets;
		'6e1da1c0-2e2e-4211-a549-294b27dafb95': Tickets;
		'dbb532f7-2003-4c0d-aead-3a3da9cbfb9b': Tickets;
		'5809fd35-59e1-4185-a381-8111a113ce40': Tickets;
		'f38a6f8c-f6d1-465f-803e-c479c6c29e6d': Tickets;
		'7ab21081-8e3a-47cc-8632-c11d33b84fe2': Tickets;
		'2abf87d3-b372-4983-a95f-7c682d39bb73': Tickets;
		'3092d3ae-c5b4-4bc6-a9dc-9990c4098fac': Tickets;
		'4384b939-2753-47fe-a353-76ded81fadf0': Tickets;
		'198a0903-2c57-4070-aecc-1ae33d6503c4': Tickets;
		'1e1183fa-b2ef-4e7d-88a7-4200bfdc32e4': Tickets;
		'f32959de-b612-49ab-9570-4c9d0ce3dab7': Tickets;
		'4f19a45e-786f-4853-b55a-31be5ad73c87': Tickets;
		'b414a21e-2376-4121-9711-5065aae2f2d2': Tickets;
		'dd915538-c192-4467-be4b-07142ec60faf': Tickets;
		'572d14ad-2e63-4983-afbe-6ae498b2f019': Tickets;
		'04ed06d7-fe00-49d1-ab96-813330e282fa': Tickets;
		'c58618ef-3e2f-4131-b1f7-cdc824882953': Tickets;
		'5fcb695c-5cbf-4c6e-917d-65804e1559e8': Tickets;
		'6dc99db4-7055-48ee-91e3-f5ece162683e': Tickets;
		'a': Tickets;
		'b00056e6-8cf8-441e-a47a-2d4eee0a97e1': Tickets;
		'c3e75e9c-4ab5-4e5a-9a81-8dd8dca57f1e': Tickets;
		'0457e8c3-769a-4bb7-8639-407595c026f6': Tickets;
		'989b73c2-5a34-43e7-a4b2-0fc1a3daf732': Tickets;
		'fd34c21f-58d2-49b7-88e0-d4e8884ca482': Tickets;
		'0f5fd90c-80a9-48c1-a810-d94b103a6e8d': Tickets;
		'f1952652-4d78-4fe2-a4fd-6f1e25eefca3': Tickets;
		'55873d88-52a1-45af-8b26-aaa156d5cdde': Tickets;
		'fc44d19b-d417-4535-ab93-8ce400207133': Tickets;
		'3aeb6e85-ae1e-4a8b-9e76-bd57423cdf92': Tickets;
		'de784831-787c-4e48-b304-b90f22ae1f3e': Tickets;
		'd48c1321-1390-4b64-9b5a-37a6ed3bbd6f': Tickets;
		'4a099628-b898-4074-926b-47c97d89db88': Tickets;
		'7b525cca-b197-486d-b353-18cfb0efd3ae': Tickets;
		'60417c00-1606-46df-a2ca-ba7fec66a605': Tickets;
		'b1d77b21-aad8-42ea-b6bb-86c3b4cb07f1': Tickets;
		'954c9cd1-9975-499d-94f2-9503db3826ba': Tickets;
		'db153506-8f63-4ece-b4cb-2f9479704092': Tickets;
		'e0b4739b-54fb-42ce-8382-5f886c6eef5e': Tickets;
		'1699a0ea-0ff9-46de-9757-d58c6da0355c': Tickets;
		'49c46e5b-5562-4efa-b9a2-2dc1b5bb549c': Tickets;
		'378b7e99-7783-49e0-8f29-94337d74b0a2': Tickets;
		'a88ae106-9f0b-4ff7-a954-95c06eea4155': Tickets;
		'f9f255e4-562a-4f3e-a5d1-6608f7cbd902': Tickets;
		'3ecaac38-52a1-4b17-a2b1-5e4275745160': Tickets;
		'3604d1ae-22d0-4ad9-a73f-cf71f9ae1a67': Tickets;
		'81e6e4f6-24e9-4e2f-8a51-a35a426f2b22': Tickets;
		'efea0cad-50f1-47de-b1ca-b5395d57bf09': Tickets;
		'6b378893-4627-4752-90dc-d7ba219bb7e2': Tickets;
		'efa1126b-f263-459e-b36d-26012fba767a': Tickets;
		'b034f126-2106-4d77-a4ba-df3d41f2caa6': Tickets;
		'b63993a5-a976-400d-8941-5f77db57d500'?: undefined;
		'd751247c-04a5-4e24-9014-5a8feff9bf01'?: undefined;
		'720a3557-0711-478e-9244-a4253ca89db6'?: undefined;
		'fe39aee4-72b8-4642-a921-8e1953ff1d89': Tickets;
		'16791069-1135-4731-a001-fdb7ac6bb098': Tickets;
		'b3ea8070-b82d-44ec-80f0-e8e750eacc3c': Tickets;
		'8723e015-fa6a-4691-be88-00c77669fe81': Tickets;
		'6d483be9-52b3-4256-b769-a88fb311cb84': Tickets;
		'john': Tickets;
		'mary': Tickets;
		'jim': Tickets;
		'odd': Tickets;
		'even': Tickets;
		'bd95b64d-3b15-494a-af39-73ede869ad9d': Tickets;
		'f8db13ac-dc76-4b9e-b2eb-ab2f16c7d8c9': Tickets;
		'a520535d-de8f-4228-a894-2677549dd047': Tickets;
		'5d0b7150-299d-4b98-9d5b-21d018e82651': Tickets;
		'5724cf16-2539-4e9d-8141-22c2884c25f9'?: undefined;
		'06dc3414-933e-4b8a-b813-8c1d883d8b9e'?: undefined;
		'528422f1-b45f-4875-98e9-177639a8814e'?: undefined;
		'850e0659-c2dc-41b4-8e5b-eb64d4b727f4': Tickets;
		'daf7079e-b0b8-4c78-94a4-e4505dbb7f1d': Tickets;
		'1c23af76-236b-48ee-8e06-d43050d7c2a4': Tickets;
		'7c4db283-cf6b-4122-86fd-08e225b43c5b': Tickets;
		'fec6fadc-cb6c-4411-b5b9-843b3a3711b5': Tickets;
		'db6a94b6-2ea9-49bb-9c03-fb936efdba37': Tickets;
		'00409443-6f06-4067-837e-ac2a25b9f22a': Tickets;
		'e141ad30-ecd1-420c-b12e-8ee83578dd65': Tickets;
		'26d0919f-f2e9-4245-8e27-2bad19204c94': Tickets;
		'18125f12-d6ef-475a-9fda-9608a62bd1c5': Tickets;
		'8f8fcaf3-9642-4594-9620-3dca8cccf8c4': Tickets;
		'9da72065-f797-474e-9ab3-684d92dcd42a': Tickets;
		'task-id'?: undefined;
	}

	export interface I__a {
		'x': number;
	}

	export interface I__b {
		'x': number;
	}

	export interface I__a__1 {
		'x': number;
	}

	export interface I__b__2 {
		'x': number;
	}

}