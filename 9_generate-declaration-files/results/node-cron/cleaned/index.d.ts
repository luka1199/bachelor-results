export = NodeCron;

declare function NodeCron(expressions: Array<any>): Array<any>;
declare namespace NodeCron {
	export function validate(expression: string): boolean;
}