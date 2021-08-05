export = ProcfsStats;

declare function ProcfsStats(time: Array<any> | number | ProcfsStats.I__time | string, smallest?: string | number, digits?: number): string;
declare namespace ProcfsStats {
	export interface I__time {
		'length': number;
	}

}