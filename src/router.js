import React, { Component } from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import App from "./App";
import Admin from "./admin";
import login from "./pages/login";
import Button from "./pages/ui/buttons";

export class Rouer extends Component {
  componentDidMount() {
    console.log("222", Button);
  }
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={login} />
          <Route path="/botton" component={Button} />
          <Route
            path="/admin"
            render={() => (
              <Admin>
                <Route exact path="/admin/ui/buttons" component={Button} />
              </Admin>
            )}
          />
        </App>
      </HashRouter>
    );
  }
}

export default Rouer;
