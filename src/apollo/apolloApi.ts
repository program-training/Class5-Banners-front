import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  split,
  from,
} from "@apollo/client";
import { getToken } from "../features/users/service/localStorageService";
import { setContext } from "@apollo/client/link/context";
import { removeTypenameFromVariables } from "@apollo/client/link/remove-typename";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
// 026513484
// const BASE_URI = import.meta.env.VITE_BASE_URI;
// const PORT = import.meta.env.VITE_PORT || "4000";

const removeTypenameLink = removeTypenameFromVariables();

const httpLink = createHttpLink({
  // uri: `${BASE_URI}${PORT}`,
  uri: `http://localhost:2121/graphql`,
});
const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:2121/graphql",
  })
);
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const authLink = setContext((_, { headers }) => {
  const token = getToken();
  return {
    headers: {
      ...headers,
      Authorization: token,
    },
  };
});

const link = from([authLink, removeTypenameLink, splitLink]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client;
