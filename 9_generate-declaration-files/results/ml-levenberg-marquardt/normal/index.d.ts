export = MlLevenbergMarquardt;

declare function MlLevenbergMarquardt(data: MlLevenbergMarquardt.I__data, parameters: Array<any>, parameterizedFunction: Function): number;
declare namespace MlLevenbergMarquardt {
	export interface I__data {
		'x': Array<any>;
		'y': Array<any>;
	}

}