/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createFBConnection?: Maybe<Array<Maybe<Page>>>;
  createUser?: Maybe<Scalars['String']['output']>;
};


export type MutationCreateFbConnectionArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateUserArgs = {
  payload: CreateUserInput;
};

export type Page = {
  __typename?: 'Page';
  accessToken?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  profilePicture?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  checkFBConnection?: Maybe<Scalars['Boolean']['output']>;
  getPages?: Maybe<Array<Maybe<Page>>>;
  signin?: Maybe<Scalars['String']['output']>;
};


export type QueryCheckFbConnectionArgs = {
  userId: Scalars['String']['input'];
};


export type QuerySigninArgs = {
  payload: SigninInput;
};

export type SigninInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  accessToken?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  profilePicture?: Maybe<Scalars['String']['output']>;
};

export type CreateFbConnectionMutationVariables = Exact<{
  token?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateFbConnectionMutation = { __typename?: 'Mutation', createFBConnection?: Array<{ __typename?: 'Page', id: string, profilePicture?: string | null, name: string } | null> | null };

export type CreateUserMutationVariables = Exact<{
  payload: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: string | null };

export type GetPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPagesQuery = { __typename?: 'Query', getPages?: Array<{ __typename?: 'Page', name: string, id: string, profilePicture?: string | null } | null> | null };

export type QueryQueryVariables = Exact<{
  payload: SigninInput;
}>;


export type QueryQuery = { __typename?: 'Query', signin?: string | null };


export const CreateFbConnectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFBConnection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFBConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateFbConnectionMutation, CreateFbConnectionMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}]}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const GetPagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}}]}}]} as unknown as DocumentNode<GetPagesQuery, GetPagesQueryVariables>;
export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SigninInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}]}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;