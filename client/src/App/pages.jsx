import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "../containers/Homepage";
import Authpage from "../containers/Authpage";
import Audits from "../containers/Audits";
import Contacts from "../containers/Contacts";
import AuditorDetails from "../containers/Contacts/AuditorDetails";
import ProviderPage from "../containers/ProviderPage";
import { Header } from "../components/FormComponent";
import { AuditorForm, ProviderForm, AuditForm } from "../containers/Forms";
import NewProvider from '../containers/ProviderPage/Form/New'

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
          <Route path="/audits/new" exact component={AuditForm} />

          <Route path="/providers" exact component={ProviderPage} />
          <Route path="/providers/new" exact component={NewProvider} />

          {/* <Route
            path="/login"
            exact
            render={props => (
              <AuthForm {...props} button="Login" heading="Sign In" />
            )}
          /> */}
        </Switch>
      </div>
    )
  }
}

export default withRouter(Main);
