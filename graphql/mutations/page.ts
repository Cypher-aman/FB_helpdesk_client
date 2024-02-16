import { graphql } from '@/gql';

export const CreateFBConnectionMutation = graphql(`
  #grapqhql
  mutation CreateFBConnection($token: String) {
    createFBConnection(token: $token) {
      id
      profilePicture
      name
    }
  }
`);
