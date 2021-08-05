export = MethodOverride;

declare function MethodOverride(getter?: string | Function, options?: MethodOverride.I__options): Function;
declare namespace MethodOverride {
	export interface I__options {
		'methods': Array<any> | null;
	}

}