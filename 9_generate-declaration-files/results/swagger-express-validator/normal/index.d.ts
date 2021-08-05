export interface I__schema {
	'paths': object;
}

export function createServer(requestHandler: Function, schema: I__schema): Server;
