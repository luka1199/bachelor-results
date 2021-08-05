export = SecurePassword;

declare function SecurePassword(opts: SecurePassword.I__opts | object): SecurePassword;
declare namespace SecurePassword {
	export interface I__opts {
		'memlimit': number;
		'opslimit': number;
	}

}