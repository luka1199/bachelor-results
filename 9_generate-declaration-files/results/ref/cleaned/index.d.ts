export = Ref;

declare function Ref(_type: string | object, _length?: number): Function;
declare namespace Ref {
	export function coerceType(): object;
	export function get(): number | Buffer;
	export function set(): void;
	export function reinterpretUntilZeros(): Buffer;
	export function ref(): Buffer;
	export function readPointer(): Buffer;
	export function reinterpret(): Buffer;
}