export = Slack;

declare class Slack {
	constructor(_at_token: string,_at_domain: string);
	setWebhook(): Slack;
	detectEmoji(): object;
	api(): Slack;
	_is_post_api(method: string): boolean;
}

declare namespace Slack {
}