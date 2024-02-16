import { graphql } from '@/gql';

export const SignupMutation = graphql(`
  #grapqhql
  mutation CreateUser($payload: CreateUserInput!) {
    createUser(payload: $payload)
  }
`);
