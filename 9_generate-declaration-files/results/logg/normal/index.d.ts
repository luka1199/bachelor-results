export interface I__logRecord {
	'level': number;
	'message': string;
	'meta': null;
	'date': Date;
	'name': string;
}

export function getSingleton(): Logger;
export function getLogger(ns: string): Logger;
export function formatRecord(logRecord: LogRecord | I__logRecord, optStripColors?: undefined): string;
export function getTransientLogger(ns: string): Logger;
