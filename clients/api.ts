import { GraphQLClient } from 'graphql-request';

const isClient = typeof window !== 'undefined';

export const GQLClient = new GraphQLClient('http://localhost:8000/graphql', {
  headers: {
    authorization: isClient
      ? 'Bearer ' + window.localStorage.getItem('helpdesk_token')
      : '',
  },
});
