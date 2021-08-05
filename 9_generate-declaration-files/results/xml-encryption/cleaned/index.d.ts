export interface I__options {
	'rsa_pub': Buffer;
	'pem': Buffer;
	'keyEncryptionAlgorithm': string;
	'disallowEncryptionWithInsecureAlgorithm'?: boolean;
	'warnInsecureAlgorithm'?: undefined;
}

export function encryptKeyInfo(symmetricKey: string, options: I__options, callback: Function): void;
