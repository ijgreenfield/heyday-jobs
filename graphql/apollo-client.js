import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import fetch from "cross-fetch";

const client = new ApolloClient({
    link: createHttpLink({
      uri: 'https://prod-00.heyday.solvestack.net/graphql',
      fetch,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'Basic c29sdmUta2V5LWE3MjUxMGMwLTZjODctNDljNS04ZjFmLTE1ZWE3N2FiMjQ2OTpzb2x2ZS1zZWNyZXQtMWMxMzk2ZDctODk4Mi00ZTYwLWJlZjQtZjEzNmIwZjI0ZmI1'
      },
    }),
    cache: new InMemoryCache(),
  });
  
  export default client;