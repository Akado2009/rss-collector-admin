import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// components
import Layout from "./Layout/Layout";

// pages


export default function App() {

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/subscriptions" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/subscriptions" />}
        />
        <Route path="/app/subscriptions" component={Layout} />
        <Route path="/app/press" component={Layout} />
        <Route path="/app/sentences" component={Layout} />
        <Route path="/app/dates" component={Layout} />
        <Route path="/app/errors" component={Layout} />
        
      </Switch>
    </HashRouter>
  );
}