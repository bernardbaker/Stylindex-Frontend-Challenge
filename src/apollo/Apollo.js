import ApolloClient from "apollo-boost";

export const URI = 'https://graphql-pokemon.now.sh'

export const client = new ApolloClient({
  uri: URI
});