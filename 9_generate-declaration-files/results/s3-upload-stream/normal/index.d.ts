export interface I__destinationDetails {
	'Bucket': string;
	'Key': string;
}

export function upload(destinationDetails: object | I__destinationDetails): Writable;
export function client(_client: S3): void;
