/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  #grapqhql\n  mutation CreateFBConnection($token: String) {\n    createFBConnection(token: $token) {\n      id\n      profilePicture\n      name\n    }\n  }\n": types.CreateFbConnectionDocument,
    "\n  #grapqhql\n  mutation CreateUser($payload: CreateUserInput!) {\n    createUser(payload: $payload)\n  }\n": types.CreateUserDocument,
    "\n  #grapqhql\n  query GetPages {\n    getPages {\n      name\n      id\n      profilePicture\n    }\n  }\n": types.GetPagesDocument,
    "\n  #grapqhql\n  query Query($payload: SigninInput!) {\n    signin(payload: $payload)\n  }\n": types.QueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #grapqhql\n  mutation CreateFBConnection($token: String) {\n    createFBConnection(token: $token) {\n      id\n      profilePicture\n      name\n    }\n  }\n"): (typeof documents)["\n  #grapqhql\n  mutation CreateFBConnection($token: String) {\n    createFBConnection(token: $token) {\n      id\n      profilePicture\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #grapqhql\n  mutation CreateUser($payload: CreateUserInput!) {\n    createUser(payload: $payload)\n  }\n"): (typeof documents)["\n  #grapqhql\n  mutation CreateUser($payload: CreateUserInput!) {\n    createUser(payload: $payload)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #grapqhql\n  query GetPages {\n    getPages {\n      name\n      id\n      profilePicture\n    }\n  }\n"): (typeof documents)["\n  #grapqhql\n  query GetPages {\n    getPages {\n      name\n      id\n      profilePicture\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #grapqhql\n  query Query($payload: SigninInput!) {\n    signin(payload: $payload)\n  }\n"): (typeof documents)["\n  #grapqhql\n  query Query($payload: SigninInput!) {\n    signin(payload: $payload)\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;