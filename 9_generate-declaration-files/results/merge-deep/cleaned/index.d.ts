export = MergeDeep;

declare function MergeDeep(orig: object | RegExp | Date, objects?: object): object;
declare function MergeDeep(orig: Array<any>, objects?: undefined): Array<any>;
declare function MergeDeep(orig: TestType, objects?: undefined): TestType;
declare namespace MergeDeep {
}