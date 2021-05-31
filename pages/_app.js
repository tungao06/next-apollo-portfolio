import { createGlobalStyle, ThemeProvider } from "styled-components";

import { ApolloProvider } from "@apollo/client";
import client from "../config/apollo-client";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#454545",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
