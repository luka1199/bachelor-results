export = SshKeyDecrypt;

declare function SshKeyDecrypt(data: string, passphrase: string, outEnc?: undefined): Buffer;
declare function SshKeyDecrypt(data: string, passphrase: string, outEnc?: string): string;
declare namespace SshKeyDecrypt {
}