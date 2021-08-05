export = ClientSessions;

declare function ClientSessions(opts: ClientSessions.I__opts): Function;
declare namespace ClientSessions {
	export interface I__cookie {
		'httpOnly'?: undefined;
		'ephemeral'?: boolean;
		'maxAge'?: number;
		'secure'?: boolean;
	}

	export interface I__opts {
		'secret': string;
		'cookieName': string;
		'duration'?: number;
		'activeDuration': number;
		'encryptionAlgorithm'?: undefined;
		'signatureAlgorithm'?: undefined;
		'cookie'?: I__cookie | object;
		'requestKey'?: string;
	}

}