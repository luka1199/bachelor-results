export = CloneDeep;

declare function CloneDeep(val: string, instanceClone?: undefined): string;
declare function CloneDeep(val: Array<any>, instanceClone?: undefined): Array<any>;
declare function CloneDeep(val: number, instanceClone?: boolean): number;
declare function CloneDeep(val: object, instanceClone?: boolean): object;
declare function CloneDeep(val: Function, instanceClone?: boolean): Function;
declare function CloneDeep(val: Map, instanceClone?: undefined): Map;
declare function CloneDeep(val: Set, instanceClone?: undefined): Set;
declare function CloneDeep(val: RegExp, instanceClone?: undefined): RegExp;
declare function CloneDeep(val: B, instanceClone?: boolean): B;
declare function CloneDeep(val: A, instanceClone?: boolean): A;
declare namespace CloneDeep {
}