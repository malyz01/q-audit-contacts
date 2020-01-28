import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "../Homepage";
import Authpage from "../Authpage";
import Audits from "../Audits";
import Contacts from "../Contacts";
import AuditorDetails from "../Contacts/AuditorDetails";
import ProviderPage from "../ProviderPage";

import { Header } from "../../components/FormComponent";
import { AuditorForm, ProviderForm } from "../Forms";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Authpage} />
          <Route path="/contacts" exact component={Contacts} />
          <Route path="/auditor/new" exact component={AuditorForm} />
          <Route path="/auditor/:id" exact component={AuditorDetails} />
          <Route path="/auditor/:id/edit" exact component={AuditorForm} />

          <Route path="/audits" exact component={Audits} />

          <Route path="/providers" exact component={ProviderPage} />
          <Route path="/providers/create" exact component={ProviderForm} />

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
