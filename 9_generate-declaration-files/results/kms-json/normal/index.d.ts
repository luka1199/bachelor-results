export = KmsJson;

declare class KmsJson {
	constructor(options: KmsJson.I__options);
}

declare namespace KmsJson {
	export interface I__options {
		'keyId': string;
		'awsKmsSettings'?: undefined;
		'encoding'?: undefined;
	}

}