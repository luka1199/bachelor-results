export = KrakenJs;

declare function KrakenJs(options: KrakenJs.I__options): Function;
declare namespace KrakenJs {
	export interface I__options {
		'protocols'?: undefined;
		'onconfig': Function;
		'basedir': string;
		'inheritViews'?: undefined;
	}

}