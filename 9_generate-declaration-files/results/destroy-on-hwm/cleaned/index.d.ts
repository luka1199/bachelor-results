export = DestroyOnHwm;

declare function DestroyOnHwm(stream: Writable | DestroyOnHwm.I__stream, fn?: Function): Writable;
declare namespace DestroyOnHwm {
	export interface I__stream {
		'_writableState': WritableState;
		'write': Function;
	}

}