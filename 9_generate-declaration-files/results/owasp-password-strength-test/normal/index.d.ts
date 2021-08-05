export interface I__params {
	'allowPassphrases': boolean;
	'maxLength': I__maxLength;
	'minLength': I__minLength;
	'minPhraseLength': I__minPhraseLength;
	'minOptionalTestsToPass': I__minOptionalTestsToPass;
}

export interface I__should {
	'be': Assertion;
}

export interface I__maxLength {
	'should': I__should;
}

export interface I__minLength {
	'should': I__should;
}

export interface I__minPhraseLength {
	'should': I__should;
}

export interface I__minOptionalTestsToPass {
	'should': I__should;
}

export function test(password: string): object;
export function config(params: I__params | object): void;
