export function isValid(iban: number | Array<any> | object | boolean | string): boolean;
export function electronicFormat(iban: string): string;
export function printFormat(iban: string, separator?: undefined): string;
export function toBBAN(iban: string, separator?: string): string;
export function fromBBAN(countryCode: string, bban: string): string;
export function isValidBBAN(countryCode: string, bban: number | object | Array<any> | boolean | string): boolean;
