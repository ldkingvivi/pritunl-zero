/// <reference path="../References.d.ts"/>
export const SYNC = 'policy.sync';
export const CHANGE = 'policy.change';

export interface Rule {
	type?: string;
	disable?: boolean;
	values?: string[];
}

export interface Policy {
	id: string;
	name?: string;
	services?: string[];
	authorities?: string[];
	roles?: string[];
	rules?: {[key: string]: Rule};
	admin_secondary?: string;
	user_secondary?: string;
	proxy_secondary?: string;
	authority_secondary?: string;
	admin_device_secondary?: boolean;
	user_device_secondary?: boolean;
	proxy_device_secondary?: boolean;
	authority_device_secondary?: boolean;
	authority_require_smart_card?: boolean;
}

export type Policies = Policy[];

export type PolicyRo = Readonly<Policy>;
export type PoliciesRo = ReadonlyArray<PolicyRo>;

export interface PolicyDispatch {
	type: string;
	data?: {
		id?: string;
		policy?: Policy;
		policies?: Policies;
	};
}
