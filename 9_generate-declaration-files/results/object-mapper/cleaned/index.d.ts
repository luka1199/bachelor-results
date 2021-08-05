export = ObjectMapper;

declare function ObjectMapper(obj?: ObjectMapper.I__obj | null, props?: string | Array<any> | Function | object, fn?: Function): object;
declare namespace ObjectMapper {
	export interface I__obj {
		'a': string;
		'b': string;
		'c': string | Function;
		'd': string;
	}

}