export = CheckSum;

declare function CheckSum(stream: string, obj: CheckSum.I__obj, done: Function): Function;
declare namespace CheckSum {
	export interface I__obj {
		'sha1': string;
		'md5': string | I__md5;
		'sha256': string;
		'sha512': string;
	}

	export interface I__md5 {
		'should': object;
	}

}