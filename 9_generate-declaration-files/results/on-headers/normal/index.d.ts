export = OnHeaders;

declare function OnHeaders(res: ServerResponse | OnHeaders.I__res, listener: Function): void;
declare namespace OnHeaders {
	export interface I__res {
		'writeHead': Function;
	}

}