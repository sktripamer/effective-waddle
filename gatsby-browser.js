import * as React from "react";
import { ApolloProvider } from "@apollo/client";

import { client } from "./lib/apolloClient";
import { AuthProvider } from "./src/hooks/useAuth";


export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <AuthProvider>{element}</AuthProvider>
  </ApolloProvider>
);
