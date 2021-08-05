export = Saywhen;

declare function Saywhen(spy: Function): CallHandler;
declare namespace Saywhen {
	export function is(val: number): Function;
	export function captor(val?: string | Any): Function;
}