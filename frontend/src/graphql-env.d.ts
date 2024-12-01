/* eslint-disable */
/* prettier-ignore */

export type introspection_types = {
	Boolean: unknown;
	Float: unknown;
	Query: {
		kind: "OBJECT";
		name: "Query";
		fields: {
			complements: {
				name: "complements";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "VerbEntity"; ofType: null };
						};
					};
				};
			};
			randomStory: {
				name: "randomStory";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	String: unknown;
	VerbEntity: {
		kind: "OBJECT";
		name: "VerbEntity";
		fields: {
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
			pluralForm: {
				name: "pluralForm";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			singularForm: {
				name: "singularForm";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
};

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
	name: never;
	query: "Query";
	mutation: never;
	subscription: never;
	types: introspection_types;
};

import * as gqlTada from "gql.tada";

declare module "gql.tada" {
	interface setupSchema {
		introspection: introspection;
	}
}
