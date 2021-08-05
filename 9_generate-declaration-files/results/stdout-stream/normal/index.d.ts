export = SteamID;

declare class SteamID {
	constructor(input: string);
	getSteam2RenderedID(newerFormat?: boolean): string;
	getSteam3RenderedID(): string;
	getSteamID64(): string;
	isValid(): boolean;
}

declare namespace SteamID {
}