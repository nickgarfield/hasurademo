import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { feather } from "./feather";

const httpLink = new HttpLink({
  uri: "https://hasura-test-pliao.herokuapp.com/v1/graphql",
  fetchPolicy: "network-only"
});

const authLink = setContext((_, { headers }) =>
  feather
    .currentUser()
    .then(u => ({
      headers: { ...headers, authorization: `Bearer ${u.tokens.idToken}` }
    }))
    .catch(_ => ({ headers }))
);

export const apollo = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
});
