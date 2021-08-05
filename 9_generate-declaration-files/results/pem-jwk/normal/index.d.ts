export = PemJwk;

declare function PemJwk(stream: Stream | PemJwk.I__stream): object;
declare namespace PemJwk {
	export interface I__stream {
		'emit': Function;
	}

}