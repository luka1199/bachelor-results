export = PolygonLookup;

declare class PolygonLookup {
	constructor(featureCollection?: undefined);
	loadFeatureCollection(collection: PolygonLookup.I__collection): void;
	search(x: number, y: number, limit?: undefined): void | object;
	search(x: number, y: number, limit?: number): object;
	searchForOnePolygon(x: number, y: number): void | object;
	searchForMultiplePolygons(x: number, y: number, limit: number): object;
}

declare namespace PolygonLookup {
	export interface I__collection {
		'features': Array<any>;
	}

}