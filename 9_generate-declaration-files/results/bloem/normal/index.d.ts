export interface I__options {
	'ratio'?: undefined;
	'scaling'?: undefined;
	'initial_capacity': number;
}

export function calculateSize(capacity: number, error_rate: number): number;
export function calculateSlices(size: number, capacity: number): number;
export class Bloem {
	constructor(size: number,slices: number);
	has(key: Buffer): boolean;
	add(key: Buffer): void;
}

export class SafeBloem {
	constructor(capacity: number,error_rate: number);
	has(key: Buffer): boolean;
	add(key: Buffer): boolean;
}

export class ScalingBloem {
	constructor(error_rate: number,options: I__options);
	has(key: Buffer): boolean;
	add(key: Buffer): void;
}

