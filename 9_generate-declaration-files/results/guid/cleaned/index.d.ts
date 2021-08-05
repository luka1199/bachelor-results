export = Guid;

declare class Guid {
	constructor(guid: string);
	equals(other: string): boolean;
}

declare namespace Guid {
export function raw(): string;
export function create(): Guid;
export function isGuid(value: string): boolean;
}