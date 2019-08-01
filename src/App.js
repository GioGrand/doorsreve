import React from "react";
import "./App.css";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloLink } from "apollo-link";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import { AuthProvider } from "./context/auth";
import AuthRoute from "./utils/AuthRoute";
import { setContext } from "apollo-link-context";
import SinglePost from "./pages/SinglePost";
import HomePage from "./app/features/frontPages/Homepage/Homepage";
import MenuContainer from "./app/features/navigation/MenuContainer";
import LoginForm from './app/features/auth/Login';
import RegisterForm from "./app/features/auth/Register";

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
          <MenuContainer />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/vecchio' component={Home} />
          <AuthRoute exact path='/login' component={LoginForm} />
          <AuthRoute exact path='/register' component={RegisterForm} />
          <Route exact path='/posts/:postId' component={SinglePost} />
        </Router>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
