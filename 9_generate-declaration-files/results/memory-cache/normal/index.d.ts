export = MemoryCache;

declare function MemoryCache(orig: object | RegExp | Date, objects?: object): object;
declare function MemoryCache(orig: Array<any>, objects?: undefined): Array<any>;
declare function MemoryCache(orig: TestType, objects?: undefined): TestType;
declare namespace MemoryCache {
}