export = PrettyTime;

declare function PrettyTime(time: Array<any> | number | PrettyTime.I__time | string, smallest?: string | number, digits?: number): string;
declare namespace PrettyTime {
	export interface I__time {
		'length': number;
	}

}