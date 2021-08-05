export = AgentBase;

declare function AgentBase(callback?: Function | AgentBase.I__callback, _opts?: AgentBase.I___opts): Agent;
declare namespace AgentBase {
	export interface I__callback {
		'timeout'?: number;
		'length': number;
	}

	export interface I___opts {
		'timeout': number;
	}

}