export = smtpapi;

declare class smtpapi {
	constructor(header?: undefined);
	jsonString(): string;
	jsonObject(): object;
	escapeUnicode(str: string): string;
	addTo(to: string): void;
	setTos(to: Array<any>): void;
	addSubstitution(key: string, val: string | Array<any>): void;
	setSubstitutions(subs: smtpapi.I__subs | object): void;
	addUniqueArg(key: string, val: string): void;
	setUniqueArgs(val: object): void;
	addCategory(cat: string): void;
	setCategories(cats: Array<any>): void;
	addSection(sec: string, val: string): void;
	setSections(sec: object): void;
	addFilter(filter: string, setting: string, val: string): void;
	setFilters(filters: object): void;
	setSendAt(send_at: number): void;
	setSendEachAt(send_each_at: Array<any>): void;
	addSendEachAt(send_each_at: number): void;
	setASMGroupID(asm_group_id: number): void;
	setIpPool(ip_pool: string): void;
}

declare namespace smtpapi {
	export interface I__subs {
		'sub': Array<any>;
	}

}