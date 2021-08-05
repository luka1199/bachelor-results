export = PiwikTracker;

declare class PiwikTracker {
	constructor(siteId: number,trackerUrl: string);
	track(options: string | PiwikTracker.I__options): void;
	listeners(): Array<any>;
	on(): ClientRequest;
}

declare namespace PiwikTracker {
	export interface I__siteId {
		'should': Assertion;
	}

	export interface I__trackerUrl {
		'should': Assertion;
	}

	export interface I__options {
		'url': string;
	}

}