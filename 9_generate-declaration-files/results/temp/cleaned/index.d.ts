export function track(value?: undefined): object;
export function mkdir(affixes: string, callback: Function): void;
export function generateName(rawAffixes?: string | object, defaultPrefix?: string): string;
export function open(affixes: string, callback: Function): void;
export function createWriteStream(affixes: string): WriteStream;
export function mkdirSync(affixes: string): string;
export function cleanupSync(): object;
export function openSync(affixes?: undefined): object;
export function cleanup(callback: Function): void;
