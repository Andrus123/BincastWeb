import React from "react";
//import Apollo Client libraries
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from 'apollo-link-context';

//import global styles
import GlobalStyle from "./components/GlobalStyle";
import Pages from "./pages";

// configure our API URI & cache
const uri = "http://localhost:4000/api";
const httpLink = createHttpLink({ uri });
const cache = new InMemoryCache();

// check for a token and return the headers to the context
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || ''
    }
  };
});

// configure Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true
});

// check for a local token
const data = {
  isLoggedIn: !!localStorage.getItem('token')
};
// write the cache data on initial load
cache.modify({ data });
// write the cache data after the cache is reset
client.onResetStore(() => cache.modify({ data }));

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Pages />
    </ApolloProvider>
  );
};

export default App;
