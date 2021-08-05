export = Accepts;

declare function Accepts(req: Accepts.I__req | object): Accepts;
declare namespace Accepts {
	export interface I__req {
		'headers': object | I__headers;
	}

	export interface I__headers {
		'accept'?: string;
	}

}