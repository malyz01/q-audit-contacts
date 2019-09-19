import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "../Homepage";
import Contact from "../ContactPage";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contacts" exact component={Contact} />

          {/* <Route
            path="/login"
            exact
            render={props => (
              <AuthForm {...props} button="Login" heading="Sign In" />
            )}
          /> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
