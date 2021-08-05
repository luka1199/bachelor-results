export = ConstraintWrapper;

declare class ConstraintWrapper {
	constructor(inst: VitalSigns | ConstraintWrapper.I__inst,monitor: string,field: string);
	greaterThan(num: number): void;
	_pushRule(comparator: string | ConstraintWrapper.I__comparator, value: number): void;
	lessThan(num: number): void;
	equals(val: number): void;
}

declare namespace ConstraintWrapper {
	export interface I__monitor {
		'should': object;
	}

	export interface I__field {
		'should': object;
	}

	export interface I__inst {
		'_constraints': Array<any>;
	}

	export interface I__comparator {
		'should': object;
	}

}