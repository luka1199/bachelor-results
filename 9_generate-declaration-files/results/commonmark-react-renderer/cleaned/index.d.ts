export = ReactRenderer;

declare class ReactRenderer {
	constructor(options: ReactRenderer.I__options);
	render(block: Node | ReactRenderer.I__block): Array<any>;
	transformLinkUri(uri: string): string;
	allowNode(): boolean;
	transformImageUri(): string;
	uriTransformer(): string;
}

declare namespace ReactRenderer {
	export interface I__options {
		'allowedTypes'?: Array<any>;
		'disallowedTypes'?: Array<any>;
		'allowNode'?: Function;
		'transformLinkUri'?: null | Function;
		'transformImageUri'?: Function;
		'renderers'?: object;
		'sourcePos'?: boolean;
		'softBreak'?: string;
		'escapeHtml'?: boolean;
		'skipHtml'?: boolean;
		'unwrapDisallowed'?: boolean;
	}

	export interface I__sourcepos {
		'0': Array<any>;
		'1': Array<any>;
	}

	export interface I__react {
		'children': Array<any>;
	}

	export interface I__block {
		'sourcepos': I__sourcepos;
		'type': string;
		'react': I__react;
	}

}