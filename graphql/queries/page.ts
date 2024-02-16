import { graphql } from '@/gql';

export const GetPagesQuery = graphql(`
  #grapqhql
  query GetPages {
    getPages {
      name
      id
      profilePicture
    }
  }
`);
