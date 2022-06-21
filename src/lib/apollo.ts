import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ofc04b016x01z49ksxg3mm/master',
  cache: new InMemoryCache()
});