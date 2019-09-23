import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "../Homepage";
import Authpage from "../Authpage";
import AuditorList from "../AuditorList";
import Calendar from "../Calendar";
import { AuditorForm } from "../Forms";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Authpage} />
          <Route path="/contacts" exact component={AuditorList} />
          <Route path="/calendar" exact component={Calendar} />
          <Route path="/auditor/new" exact component={AuditorForm} />
          <Route path="/auditor/:id/edit" exact component={AuditorForm} />

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
