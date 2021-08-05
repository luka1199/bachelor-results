export interface I__parent {
	'parent': Module | I__parent;
	'paths': Array<any>;
}

export function addPath(path: string, parent?: Module | I__parent): void;
