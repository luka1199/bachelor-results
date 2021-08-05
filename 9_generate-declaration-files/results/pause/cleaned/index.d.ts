export = Pause;

declare function Pause(stream: Stream | Pause.I__stream): object;
declare namespace Pause {
	export interface I__stream {
		'emit': Function;
	}

}