export = Yesql;

declare function Yesql(dir: string): object;
declare namespace Yesql {
	export function pg(query: string): Function;
	export function mysql(query: string): Function;
}