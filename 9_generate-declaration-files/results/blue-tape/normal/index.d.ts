export = BlueTape;

declare function BlueTape(): Test;
declare namespace BlueTape {
	export function createHarness(): Function;
}