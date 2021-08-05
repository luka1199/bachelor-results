export interface I__nodule {
	'inc': Function;
}

export function wrap(nodule: I__nodule, name: string, wrapper?: Function): Function;
export function wrap(nodule: I__nodule, name: string, wrapper?: undefined): void;
