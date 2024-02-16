import { graphql } from '@/gql';

export const LoginQuery = graphql(`
  #grapqhql
  query Query($payload: SigninInput!) {
    signin(payload: $payload)
  }
`);
