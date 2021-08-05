export = PromisifySupertest;

declare function PromisifySupertest(name: Function | object, test?: Function, noMutate?: boolean): void;
declare function PromisifySupertest(name: object, test?: Function, noMutate?: undefined): object;
declare namespace PromisifySupertest {
}