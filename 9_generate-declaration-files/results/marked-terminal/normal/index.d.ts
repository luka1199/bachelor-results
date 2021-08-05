export = Renderer;

declare class Renderer {
	constructor(options: object,highlightOptions?: undefined);
	text(str: string): string;
	emoji(text: string): string;
	(): string;
	textLength(str: string): number;
	identity(): string;
	transform(): string;
}

declare namespace Renderer {
}