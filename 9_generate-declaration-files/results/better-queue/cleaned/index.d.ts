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
		'0c16a11d-a15d-49f9-842e-899244ec511f': number;
		'4b7810e9-d1f3-4090-9098-c25e192775df': number;
		'15656f53-9ffa-4efc-8a51-b60844686fff': number;
		'7bab57d0-14e8-48b2-90c3-a6e512f88ad1': number;
		'e9c85727-f1cb-40a2-9668-3058a5141bba': number;
		'f208d2b0-7257-47ff-8cb7-13caaf4d0039': number;
		'3180b578-9f37-4a30-8a66-3769abad0270': number;
		'32ab062f-e40a-456e-bc8a-c6e04fe029f2': number;
		'831d50df-fdc4-4b22-8b38-9dd16e5286cb': number;
		'1504b8e5-fef4-4b67-a036-af438ad57a1a': number;
		'ecbb89c7-27ae-4a46-ba03-d16d0330f0bd': number;
		'996cd1b7-8332-49bc-be17-ad234e402f26': number;
		'd4d6d1f5-6b21-4af2-b91e-9c45b4ad40d3': number;
		'6e5fbf7f-bb2d-48d5-8b68-63ddc379f893': number;
		'1e893c5c-fc29-43de-8188-847bdf27194e': number;
		'da0ce16e-e58a-4f7b-97da-0ef30ce78f27': number;
		'347bcf85-379c-4409-9b02-203ad804c2f9': number;
		'c62eb35d-5a3a-418d-8cb9-3ea21af0be26': number;
		'a3b3b130-a129-43f6-8f68-cc55f6cc0b20': number;
		'2734ebe4-5f52-431f-b11a-ccbe58f05659': number;
		'2679a87f-1830-41b1-a167-85bb02a4e830': number;
		'5c5b9365-eaea-4dea-9b57-cb9eef42450a': number;
		'56ee1eae-7b90-4864-8569-c6a59c4d6ea4': number;
		'7a1b0c06-5778-41a4-befc-8633f9f1e44d': number;
		'24001d28-c1f3-4f4a-8fc9-f93df7f98cf3': number;
		'2fe0a135-3a37-4461-a23b-823afbcf964d': number;
		'a5aabac0-07d7-4b09-85e4-13be3be2f308': number;
		'1a6c0d61-7e7f-41de-80a7-154cb2d7780c': number;
		'2e4a3367-5df5-4399-b463-b3f4c14e6a79': number;
		'bd0db4e5-ed14-4eb5-a2be-420ad06b4790': number;
		'76268142-eeca-4fe2-aefd-96016045450c': number;
		'1174bea3-9827-4dfb-9f05-23a5e3c25322': number;
		'36fb0810-6d49-420e-9c45-d9ff526b0f82': number;
		'1391cf2f-5512-4bfd-ab4d-5cb425b09935': number;
		'913d4256-9055-44ee-99a3-fc6abebe019b': number;
		'a': object;
		'3faee054-d681-40df-939e-c960eef6af4e': number;
		'fedfd2f8-1b78-49d6-ae7f-d10800a4a901': number;
		'a078c2df-8dee-485c-85b9-c8e4f071e3b4': number;
		'8b0b6cf3-ec4f-4c46-b24c-42a3f96d9a0c': number;
		'85fc5bf1-d04f-4a60-b164-29560ff910d6': number;
		'64aba15d-d462-474e-89a0-c19656fedc38': number;
		'ea71d8bd-f392-47a6-b7b3-db220e457fcb': number;
		'5554f8c8-3772-42ad-9f8e-6e928ed0d769': number;
		'89cd1128-c4e0-4455-86c6-7d8c7b87bcd4': number;
		'20bc09e4-1490-472f-abb2-9005ec08ecac': number;
		'cdf6ce69-9df4-4db7-aafa-ba52e0ad63e1': number;
		'49e64de6-0308-4646-a4d6-712089b4f362': number;
		'42641130-0931-4173-9c62-1bddf7f9b933': number;
		'ee670944-ba7a-453d-83dc-390dfe481ef0': number;
		'a5339495-27cb-4b3e-9adb-7505b26292b6': number;
		'a4e84370-5545-4424-85e9-e4261f6c6b45': number;
		'37e7a245-8dde-4f0c-8f40-046a00eec128': number;
		'bd317c30-c680-4f67-951c-f3e2bb785abd': number;
		'b762aab7-a572-4fcb-adb8-f7386a781703': number;
		'34d03c4b-8a63-4eac-963b-05fcaa481a70': number;
		'c5087bb8-4dfe-4c13-82d7-f13bc0fba033': number;
		'5cec216f-7b59-42e9-ad4d-c477158abb3d': number;
		'ccdb833a-b91f-451d-a8e7-f7181b361ae2': number;
		'70dfb37e-120f-43bd-bc11-1deeb9c39166': number;
		'89886b8c-c8c9-4006-a9a7-b1f173f1f48e': number;
		'572581a5-dabd-4ee1-88b8-b11826af4d98': number;
		'a303f0d4-05c9-4314-8c76-3a6ccc0de1c2': number;
		'363bddb8-feaa-4c18-b9c6-8a333bc7f9f3': number;
		'2dbabcdc-e463-4c76-a2d9-586f977ca4c5': number;
		'd214652b-2953-47a7-81b5-5372a1d5e16f': number;
		'395093a4-ea10-49f5-8f1d-361d70cb208b': number;
		'5b0d8e3e-4c5d-4a44-91be-c031df99ea54': number;
		'5e3ff732-018e-4895-83bc-286565ef4c09': number;
		'6fd4f108-9d86-4ad3-81e6-0b275e0d9c3e': number;
		'e285c4db-d432-49f3-902f-7b0bbbeaaa5e': number;
		'95f88e13-6fcf-4190-88b6-4a5622949c20': number;
		'a9df03b0-c621-4eb3-a357-3c5d22835348': number;
		'9414dc2e-318f-4fc2-b175-bc1db9741e28': number;
		'f6dadcc1-86d4-4541-a3a3-40e043424db7': number;
		'341d2e18-ce73-4f9b-a563-f46e70a13e20': number;
		'163dd052-0a63-48de-9750-29599fc17417': number;
		'11b0b954-911e-4bec-b523-fdf3f29215d1': number;
		'13a972c6-c751-4882-899d-7a66d3023f18': number;
		'91503057-0bad-4624-99d8-586a64ce8497': number;
		'542165bc-e4f4-43d2-a02f-bd5be2cd3936': number;
		'73539b31-5a00-4f28-9d18-4b264ec19a0e': number;
		'john': object;
		'mary': object;
		'jim': object;
		'odd': number;
		'even': number;
		'b70fef69-b35e-44d5-807d-7ace1882946c': number;
		'd5952d2a-7205-4cc9-9cdc-8fc7d2be0494': number;
		'75ca8029-7d1d-4dd6-ae2b-a07e26357a18': number;
		'90ce408d-ae04-4a7d-a2d0-149c81bdd71c': number;
		'e01025c5-ece2-4ed8-8953-53510620ecbb': number;
		'42dbcf5e-ff66-4fe7-a0ab-1fd903894c4f': number;
		'9b8ac0b4-9ee2-4918-a4f0-a7e36214f159': number;
		'b154e05c-b330-4f9a-ab8b-3b428a599680': number;
		'e427207a-4fde-4c42-80fc-2f10775a84c9': number;
		'6df7bb93-4f48-4d05-9df7-92b9d3f030cd': number;
		'd1ca19ff-fbf3-4e29-9f12-8742cb48d4ef': number;
		'e783bf3c-f56d-4533-b344-6de347286939': number;
		'e1c4c755-df7b-4a2c-ba7b-8a19adfea83f': number;
		'9c4fa9aa-205e-4c5f-b07b-267d4eb9ba8b': number;
		'de8da724-e2f8-41ca-969d-1ead06826e76': number;
		'3b886245-1541-48fd-9a05-ad3e8607127b': number;
		'354eb746-81bf-42b2-9923-49ca645e8430': number;
		'259fe700-aed0-4599-b56e-bac4446be047': number;
		'abfec2fa-c4ad-4c61-89e5-197ae6df1889': number;
		'task-id': number;
	}

	export interface I__tickets {
		'0': Tickets;
		'1': Tickets;
		'2': Tickets;
		'0c16a11d-a15d-49f9-842e-899244ec511f': Tickets;
		'4b7810e9-d1f3-4090-9098-c25e192775df': Tickets;
		'7bab57d0-14e8-48b2-90c3-a6e512f88ad1': Tickets;
		'e9c85727-f1cb-40a2-9668-3058a5141bba': Tickets;
		'f208d2b0-7257-47ff-8cb7-13caaf4d0039': Tickets;
		'3180b578-9f37-4a30-8a66-3769abad0270': Tickets;
		'32ab062f-e40a-456e-bc8a-c6e04fe029f2': Tickets;
		'831d50df-fdc4-4b22-8b38-9dd16e5286cb': Tickets;
		'1504b8e5-fef4-4b67-a036-af438ad57a1a': Tickets;
		'ecbb89c7-27ae-4a46-ba03-d16d0330f0bd': Tickets;
		'996cd1b7-8332-49bc-be17-ad234e402f26': Tickets;
		'd4d6d1f5-6b21-4af2-b91e-9c45b4ad40d3': Tickets;
		'6e5fbf7f-bb2d-48d5-8b68-63ddc379f893': Tickets;
		'1e893c5c-fc29-43de-8188-847bdf27194e': Tickets;
		'da0ce16e-e58a-4f7b-97da-0ef30ce78f27': Tickets;
		'347bcf85-379c-4409-9b02-203ad804c2f9': Tickets;
		'c62eb35d-5a3a-418d-8cb9-3ea21af0be26': Tickets;
		'a3b3b130-a129-43f6-8f68-cc55f6cc0b20': Tickets;
		'2734ebe4-5f52-431f-b11a-ccbe58f05659': Tickets;
		'2679a87f-1830-41b1-a167-85bb02a4e830': Tickets;
		'5c5b9365-eaea-4dea-9b57-cb9eef42450a': Tickets;
		'56ee1eae-7b90-4864-8569-c6a59c4d6ea4': Tickets;
		'7a1b0c06-5778-41a4-befc-8633f9f1e44d': Tickets;
		'24001d28-c1f3-4f4a-8fc9-f93df7f98cf3': Tickets;
		'1a6c0d61-7e7f-41de-80a7-154cb2d7780c': Tickets;
		'2e4a3367-5df5-4399-b463-b3f4c14e6a79': Tickets;
		'bd0db4e5-ed14-4eb5-a2be-420ad06b4790': Tickets;
		'76268142-eeca-4fe2-aefd-96016045450c': Tickets;
		'36fb0810-6d49-420e-9c45-d9ff526b0f82': Tickets;
		'a': Tickets;
		'3faee054-d681-40df-939e-c960eef6af4e': Tickets;
		'fedfd2f8-1b78-49d6-ae7f-d10800a4a901': Tickets;
		'8b0b6cf3-ec4f-4c46-b24c-42a3f96d9a0c': Tickets;
		'85fc5bf1-d04f-4a60-b164-29560ff910d6': Tickets;
		'64aba15d-d462-474e-89a0-c19656fedc38': Tickets;
		'ea71d8bd-f392-47a6-b7b3-db220e457fcb': Tickets;
		'5554f8c8-3772-42ad-9f8e-6e928ed0d769': Tickets;
		'89cd1128-c4e0-4455-86c6-7d8c7b87bcd4': Tickets;
		'20bc09e4-1490-472f-abb2-9005ec08ecac': Tickets;
		'cdf6ce69-9df4-4db7-aafa-ba52e0ad63e1': Tickets;
		'49e64de6-0308-4646-a4d6-712089b4f362': Tickets;
		'42641130-0931-4173-9c62-1bddf7f9b933': Tickets;
		'ee670944-ba7a-453d-83dc-390dfe481ef0': Tickets;
		'a5339495-27cb-4b3e-9adb-7505b26292b6': Tickets;
		'a4e84370-5545-4424-85e9-e4261f6c6b45': Tickets;
		'37e7a245-8dde-4f0c-8f40-046a00eec128': Tickets;
		'bd317c30-c680-4f67-951c-f3e2bb785abd': Tickets;
		'b762aab7-a572-4fcb-adb8-f7386a781703': Tickets;
		'34d03c4b-8a63-4eac-963b-05fcaa481a70': Tickets;
		'c5087bb8-4dfe-4c13-82d7-f13bc0fba033': Tickets;
		'5cec216f-7b59-42e9-ad4d-c477158abb3d': Tickets;
		'ccdb833a-b91f-451d-a8e7-f7181b361ae2': Tickets;
		'70dfb37e-120f-43bd-bc11-1deeb9c39166': Tickets;
		'89886b8c-c8c9-4006-a9a7-b1f173f1f48e': Tickets;
		'363bddb8-feaa-4c18-b9c6-8a333bc7f9f3': Tickets;
		'2dbabcdc-e463-4c76-a2d9-586f977ca4c5': Tickets;
		'd214652b-2953-47a7-81b5-5372a1d5e16f': Tickets;
		'395093a4-ea10-49f5-8f1d-361d70cb208b': Tickets;
		'5e3ff732-018e-4895-83bc-286565ef4c09': Tickets;
		'95f88e13-6fcf-4190-88b6-4a5622949c20': Tickets;
		'a9df03b0-c621-4eb3-a357-3c5d22835348': Tickets;
		'9414dc2e-318f-4fc2-b175-bc1db9741e28': Tickets;
		'f6dadcc1-86d4-4541-a3a3-40e043424db7'?: undefined;
		'341d2e18-ce73-4f9b-a563-f46e70a13e20'?: undefined;
		'163dd052-0a63-48de-9750-29599fc17417'?: undefined;
		'11b0b954-911e-4bec-b523-fdf3f29215d1': Tickets;
		'13a972c6-c751-4882-899d-7a66d3023f18': Tickets;
		'91503057-0bad-4624-99d8-586a64ce8497': Tickets;
		'542165bc-e4f4-43d2-a02f-bd5be2cd3936': Tickets;
		'73539b31-5a00-4f28-9d18-4b264ec19a0e': Tickets;
		'john': Tickets;
		'mary': Tickets;
		'jim': Tickets;
		'odd': Tickets;
		'even': Tickets;
		'b70fef69-b35e-44d5-807d-7ace1882946c': Tickets;
		'd5952d2a-7205-4cc9-9cdc-8fc7d2be0494': Tickets;
		'75ca8029-7d1d-4dd6-ae2b-a07e26357a18': Tickets;
		'90ce408d-ae04-4a7d-a2d0-149c81bdd71c': Tickets;
		'e01025c5-ece2-4ed8-8953-53510620ecbb'?: undefined;
		'42dbcf5e-ff66-4fe7-a0ab-1fd903894c4f'?: undefined;
		'9b8ac0b4-9ee2-4918-a4f0-a7e36214f159'?: undefined;
		'b154e05c-b330-4f9a-ab8b-3b428a599680': Tickets;
		'e427207a-4fde-4c42-80fc-2f10775a84c9': Tickets;
		'6df7bb93-4f48-4d05-9df7-92b9d3f030cd': Tickets;
		'd1ca19ff-fbf3-4e29-9f12-8742cb48d4ef': Tickets;
		'e783bf3c-f56d-4533-b344-6de347286939': Tickets;
		'e1c4c755-df7b-4a2c-ba7b-8a19adfea83f': Tickets;
		'9c4fa9aa-205e-4c5f-b07b-267d4eb9ba8b': Tickets;
		'de8da724-e2f8-41ca-969d-1ead06826e76': Tickets;
		'3b886245-1541-48fd-9a05-ad3e8607127b': Tickets;
		'354eb746-81bf-42b2-9923-49ca645e8430': Tickets;
		'259fe700-aed0-4599-b56e-bac4446be047': Tickets;
		'abfec2fa-c4ad-4c61-89e5-197ae6df1889': Tickets;
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