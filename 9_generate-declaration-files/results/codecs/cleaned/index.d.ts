export = Codecs;

declare function Codecs(fmt?: string | Codecs.I__fmt, fallback?: object): object;
declare function Codecs(fmt?: string, fallback?: null): null;
declare namespace Codecs {
	export interface I__fmt {
		'encode': Function;
		'decode': Function;
		'name': string;
	}

}