export = ScopedHttpClient;

declare function ScopedHttpClient(opts: ScopedHttpClient.I__opts | object): SecurePassword;
declare namespace ScopedHttpClient {
	export interface I__opts {
		'memlimit': number;
		'opslimit': number;
	}

}