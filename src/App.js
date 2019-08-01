import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloLink } from "apollo-link";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MenuBar from "./components/MenuBar";
import { Container } from "semantic-ui-react";
import { AuthProvider } from "./context/auth";
import AuthRoute from "./utils/AuthRoute";
import { setContext } from "apollo-link-context";
import SinglePost from "./pages/SinglePost";

const httpLink = createHttpLink({
  uri: "http://test1-env.ycmt5na4vv.eu-west-2.elasticbeanstalk.com/"
});

const authLink = setContext((_, { headers, ...context }) => {
  const token = localStorage.getItem("jwtToken");
  return {
    headers: {
      ...headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    ...context
  };
});

const link = ApolloLink.from([authLink, httpLink]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router>
          <Container>
            <MenuBar />
            <Route exact path='/' component={Home} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route exact path='/posts/:postId' component={SinglePost} />
          </Container>
        </Router>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
