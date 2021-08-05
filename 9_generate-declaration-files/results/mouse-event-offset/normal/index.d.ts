export = MouseEventOffset;

declare function MouseEventOffset(ev: MouseEventOffset.I__ev, target?: object, out?: Array<any>): Array<any>;
declare namespace MouseEventOffset {
	export interface I__ev {
		'clientX': number;
		'clientY': number;
		'currentTarget': object;
	}

}