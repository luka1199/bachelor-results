export = GeoPoint;

declare class GeoPoint {
	constructor(lat: number,lon: number,inRadians?: undefined);
	latitude(inRadians?: boolean): number;
	longitude(inRadians?: boolean): number;
	boundingCoordinates(distance: number, radius?: boolean | number, inKilometers?: undefined): Array<any>;
	distanceTo(point: GeoPoint | GeoPoint.I__point, inKilometers?: boolean): number;
}

declare namespace GeoPoint {
	export interface I__point {
		'_radLat': number;
		'_radLon': number;
	}

}