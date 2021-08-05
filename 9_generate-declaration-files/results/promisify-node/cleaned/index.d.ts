export = PromisifyNode;

declare function PromisifyNode(name: Function | object, test?: Function, noMutate?: boolean): void;
declare function PromisifyNode(name: object, test?: Function, noMutate?: undefined): object;
declare namespace PromisifyNode {
}