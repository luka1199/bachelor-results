export = diff_match_patch;

declare class diff_match_patch {
	constructor();
	diff_commonPrefix(text1: string, text2: string): number;
	diff_commonSuffix(text1: string, text2: string): number;
	diff_commonOverlap_(text1: string, text2: string): number;
	diff_halfMatch_(text1: string, text2: string): null | Array<any>;
	diff_linesToChars_(text1: string, text2: string): object;
	diff_charsToLines_(diffs: Array<any> | diff_match_patch.I__diffs, lineArray: Array<any> | diff_match_patch.I__lineArray): void;
	diff_cleanupMerge(diffs: Array<any> | diff_match_patch.I__diffs__126 | diff_match_patch.I__diffs): void;
	diff_cleanupSemanticLossless(diffs: Array<any> | diff_match_patch.I__diffs__128 | diff_match_patch.I__diffs): void;
	diff_cleanupSemantic(diffs: Array<any> | diff_match_patch.I__diffs__132 | diff_match_patch.I__diffs): void;
	diff_cleanupEfficiency(diffs: Array<any> | diff_match_patch.I__diffs__138 | diff_match_patch.I__diffs): void;
	diff_prettyHtml(diffs: Array<any> | diff_match_patch.I__diffs__147): string;
	diff_text1(diffs: Array<any> | diff_match_patch.I__diffs__153 | diff_match_patch.I__diffs): string;
	diff_text2(diffs: Array<any> | diff_match_patch.I__diffs__155): string;
	diff_toDelta(diffs: Array<any>): string;
	diff_fromDelta(text1: string, delta: string): Array<any>;
	diff_xIndex(diffs: Array<any> | diff_match_patch.I__diffs__160 | diff_match_patch.I__diffs, loc: number): number;
	diff_levenshtein(diffs: Array<any> | diff_match_patch.I__diffs__163 | diff_match_patch.I__diffs): number;
	diff_bisect_(text1: string, text2: string, deadline: number): Array<any>;
	diff_bisectSplit_(text1: string, text2: string, x: number, y: number, deadline: number): Array<any>;
	diff_main(text1: string, text2: string, opt_checklines: boolean, opt_deadline?: number): Array<any>;
	diff_compute_(text1: string, text2: string, checklines: boolean, deadline: number): Array<any>;
	match_alphabet_(pattern: string): object;
	match_bitap_(text: string, pattern: string, loc: number): number;
	match_main(text: string, pattern: string, loc: number): number;
	patch_fromText(textline?: string): Array<any>;
	patch_toText(patches: Array<any>): string;
	patch_addContext_(patch:  | diff_match_patch.I__patch, text: string): void;
	patch_make(a: string, opt_b: string, opt_c?: undefined): Array<any>;
	patch_splitMax(patches: Array<any>): void;
	patch_apply(patches: Array<any>, text: string): Array<any>;
	patch_deepCopy(patches: Array<any>): Array<any>;
	patch_addPadding(patches: Array<any>): string;
}

declare namespace diff_match_patch {
	export interface I__1 {
		'0': number;
		'1': string;
		'length': number;
	}

	export interface I__0 {
		'0': number;
		'1': I__1 | string;
	}

	export interface I__diffs {
		'0': I__0 | Array<any>;
		'1': I__1 | Array<any>;
		'length': number;
	}

	export interface I__lineArray {
		'1': string;
		'2': string;
		'3': string;
		'4': string;
		'5': string;
		'6': string;
		'7': string;
		'8': string;
		'9': string;
		'10': string;
		'11': string;
		'12': string;
		'13': string;
		'14': string;
		'15': string;
		'16': string;
		'17': string;
		'18': string;
		'19': string;
		'20': string;
		'21': string;
		'22': string;
		'23': string;
		'24': string;
		'25': string;
		'26': string;
		'27': string;
		'28': string;
		'29': string;
		'30': string;
		'31': string;
		'32': string;
		'33': string;
		'34': string;
		'35': string;
		'36': string;
		'37': string;
		'38': string;
		'39': string;
		'40': string;
		'41': string;
		'42': string;
		'43': string;
		'44': string;
		'45': string;
		'46': string;
		'47': string;
		'48': string;
		'49': string;
		'50': string;
		'51': string;
		'52': string;
		'53': string;
		'54': string;
		'55': string;
		'56': string;
		'57': string;
		'58': string;
		'59': string;
		'60': string;
		'61': string;
		'62': string;
		'63': string;
		'64': string;
		'65': string;
		'66': string;
		'67': string;
		'68': string;
		'69': string;
		'70': string;
		'71': string;
		'72': string;
		'73': string;
		'74': string;
		'75': string;
		'76': string;
		'77': string;
		'78': string;
		'79': string;
		'80': string;
		'81': string;
		'82': string;
		'83': string;
		'84': string;
		'85': string;
		'86': string;
		'87': string;
		'88': string;
		'89': string;
		'90': string;
		'91': string;
		'92': string;
		'93': string;
		'94': string;
		'95': string;
		'96': string;
		'97': string;
		'98': string;
		'99': string;
		'100': string;
		'101': string;
		'102': string;
		'103': string;
		'104': string;
		'105': string;
		'106': string;
		'107': string;
		'108': string;
		'109': string;
		'110': string;
		'111': string;
		'112': string;
		'113': string;
		'114': string;
		'115': string;
		'116': string;
		'117': string;
		'118': string;
		'119': string;
		'120': string;
		'121': string;
		'122': string;
		'123': string;
		'124': string;
		'125': string;
		'126': string;
		'127': string;
		'128': string;
		'129': string;
		'130': string;
		'131': string;
		'132': string;
		'133': string;
		'134': string;
		'135': string;
		'136': string;
		'137': string;
		'138': string;
		'139': string;
		'140': string;
		'141': string;
		'142': string;
		'143': string;
		'144': string;
		'145': string;
		'146': string;
		'147': string;
		'148': string;
		'149': string;
		'150': string;
		'151': string;
		'152': string;
		'153': string;
		'154': string;
		'155': string;
		'156': string;
		'157': string;
		'158': string;
		'159': string;
		'160': string;
		'161': string;
		'162': string;
		'163': string;
		'164': string;
		'165': string;
		'166': string;
		'167': string;
		'168': string;
		'169': string;
		'170': string;
		'171': string;
		'172': string;
		'173': string;
		'174': string;
		'175': string;
		'176': string;
		'177': string;
		'178': string;
		'179': string;
		'180': string;
		'181': string;
		'182': string;
		'183': string;
		'184': string;
		'185': string;
		'186': string;
		'187': string;
		'188': string;
		'189': string;
		'190': string;
		'191': string;
		'192': string;
		'193': string;
		'194': string;
		'195': string;
		'196': string;
		'197': string;
		'198': string;
		'199': string;
		'200': string;
		'201': string;
		'202': string;
		'203': string;
		'204': string;
		'205': string;
		'206': string;
		'207': string;
		'208': string;
		'209': string;
		'210': string;
		'211': string;
		'212': string;
		'213': string;
		'214': string;
		'215': string;
		'216': string;
		'217': string;
		'218': string;
		'219': string;
		'220': string;
		'221': string;
		'222': string;
		'223': string;
		'224': string;
		'225': string;
		'226': string;
		'227': string;
		'228': string;
		'229': string;
		'230': string;
		'231': string;
		'232': string;
		'233': string;
		'234': string;
		'235': string;
		'236': string;
		'237': string;
		'238': string;
		'239': string;
		'240': string;
		'241': string;
		'242': string;
		'243': string;
		'244': string;
		'245': string;
		'246': string;
		'247': string;
		'248': string;
		'249': string;
		'250': string;
		'251': string;
		'252': string;
		'253': string;
		'254': string;
		'255': string;
		'256': string;
		'257': string;
		'258': string;
		'259': string;
		'260': string;
		'261': string;
		'262': string;
		'263': string;
		'264': string;
		'265': string;
		'266': string;
		'267': string;
		'268': string;
		'269': string;
		'270': string;
		'271': string;
		'272': string;
		'273': string;
		'274': string;
		'275': string;
		'276': string;
		'277': string;
		'278': string;
		'279': string;
		'280': string;
		'281': string;
		'282': string;
		'283': string;
		'284': string;
		'285': string;
		'286': string;
		'287': string;
		'288': string;
		'289': string;
		'290': string;
		'291': string;
		'292': string;
		'293': string;
		'294': string;
		'295': string;
		'296': string;
		'297': string;
		'298': string;
		'299': string;
		'300': string;
	}

	export interface I__0__125 {
		'0': number;
		'1': string | I__1;
	}

	export interface I__diffs__126 {
		'0': I__0__125 | Array<any> | I__0;
		'1': I__1__127 | Array<any> | I__1;
		'2': I__2 | Array<any>;
		'3': Array<any> | I__3;
		'4': I__4 | Array<any>;
		'5': Array<any>;
		'length': number;
	}

	export interface I__1__127 {
		'0': number;
		'1': string | I__1;
		'length': number;
	}

	export interface I__2 {
		'0': number;
		'1': string | I__1;
	}

	export interface I__4 {
		'0': number;
		'1': string;
	}

	export interface I__3 {
		'0': number;
		'1': string;
	}

	export interface I__diffs__128 {
		'0': I__0__130 | Array<any> | I__0;
		'1': I__1 | Array<any>;
		'2': I__2__131 | Array<any> | I__2;
		'length': number;
	}

	export interface I__1__129 {
		'0': number;
		'1': I__1 | string;
		'length': number;
	}

	export interface I__0__130 {
		'0': number;
		'1': I__1__129 | string | I__1;
	}

	export interface I__2__131 {
		'0': number;
		'1': string;
	}

	export interface I__diffs__132 {
		'0': I__0__134 | Array<any> | I__0;
		'1': I__1 | Array<any>;
		'2': I__2__135 | Array<any> | I__2;
		'3': I__3__136 | Array<any> | I__3;
		'4': Array<any> | I__4__137;
		'5': Array<any>;
		'6': Array<any>;
		'7': Array<any>;
		'8': Array<any>;
		'9': Array<any>;
		'10': Array<any>;
		'11': Array<any>;
		'length': number;
	}

	export interface I__1__133 {
		'0': number;
		'1': I__1 | string;
		'length': number;
	}

	export interface I__0__134 {
		'0': number;
		'1': I__1__133 | I__1 | string;
	}

	export interface I__2__135 {
		'0': number;
		'1': I__1 | string;
	}

	export interface I__3__136 {
		'0': number;
		'1': string;
	}

	export interface I__4__137 {
		'0': number;
		'1': string;
	}

	export interface I__diffs__138 {
		'0': I__0__139 | Array<any>;
		'1': I__1__140 | Array<any> | I__1;
		'2': I__2__141 | Array<any> | I__2;
		'3': I__3__142 | Array<any>;
		'4': I__4__143 | Array<any>;
		'5': Array<any>;
		'6': Array<any>;
		'7': Array<any>;
		'8': Array<any>;
		'length': number;
	}

	export interface I__0__139 {
		'0': number;
		'1': string;
	}

	export interface I__1__140 {
		'0': number;
		'1': string;
		'length': number;
	}

	export interface I__2__141 {
		'0': number;
		'1': I__1 | string;
	}

	export interface I__3__142 {
		'0': number;
		'1': string;
	}

	export interface I__4__143 {
		'0': number;
		'1': string;
	}

	export interface I__0__144 {
		'0': number;
		'1': string;
	}

	export interface I__1__145 {
		'1': string;
	}

	export interface I__2__146 {
		'1': string;
	}

	export interface I__diffs__147 {
		'0': I__0__144 | Array<any>;
		'1': I__1__145 | Array<any>;
		'2': I__2__146 | Array<any>;
		'length': number;
	}

	export interface I__0__148 {
		'0': number;
		'1': string | I__1;
	}

	export interface I__1__149 {
		'0': number;
		'1': string | I__1;
		'length': number;
	}

	export interface I__2__150 {
		'0': number;
		'1': string;
	}

	export interface I__3__151 {
		'0': number;
		'1': string;
	}

	export interface I__4__152 {
		'0': number;
		'1': string;
	}

	export interface I__5 {
		'0': number;
		'1': string;
	}

	export interface I__6 {
		'0': number;
		'1': string;
	}

	export interface I__diffs__153 {
		'0': I__0__148 | Array<any> | I__0;
		'1': I__1__149 | Array<any> | I__1;
		'2': I__2__150 | I__2;
		'3': I__3__151 | Array<any> | I__3;
		'4': I__4__152 | Array<any> | I__4;
		'5': I__5;
		'6': I__6 | Array<any>;
		'7': I__7;
		'length': number;
	}

	export interface I__7 {
		'0': number;
		'1': string;
	}

	export interface I__0__154 {
		'0': number;
		'1': string;
	}

	export interface I__diffs__155 {
		'0': I__0__154 | Array<any>;
		'length': number;
	}

	export interface I__1__157 {
		'1': I__1 | string;
		'length': number;
	}

	export interface I__0__158 {
		'0': number;
		'1': I__1__157 | string;
	}

	export interface I__2__159 {
		'0': number;
		'1': string;
	}

	export interface I__diffs__160 {
		'0': I__0__158 | Array<any> | I__0;
		'1': I__1 | Array<any>;
		'2': I__2__159 | Array<any>;
		'length': number;
	}

	export interface I__1__161 {
		'1': I__1;
		'length': number;
	}

	export interface I__0__162 {
		'0': number;
		'1': I__1__161;
	}

	export interface I__diffs__163 {
		'0': I__0__162 | Array<any>;
		'1': I__1 | Array<any>;
		'2': Array<any>;
		'length': number;
	}

	export interface I__patch {
		'start2': number;
		'length1': number;
		'diffs': Array<any>;
		'start1': number;
		'length2': number;
	}

}