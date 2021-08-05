export = Ssdeep;

declare function Ssdeep(data: string, passphrase: string, outEnc?: undefined): Buffer;
declare function Ssdeep(data: string, passphrase: string, outEnc?: string): string;
declare namespace Ssdeep {
}