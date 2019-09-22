import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";
import { Grid, FormControl, Paper } from "@material-ui/core";
import { styled } from "@material-ui/styles";

import {
  TextField,
  Select,
  Header,
  Button
} from "../../components/FormComponent";

import { auditor } from "../../store/actions";

const MainContainer = styled(Paper)({
  width: "500px",
  padding: "1rem .5rem 1rem",
  margin: "2rem auto"
});

const OptionalContainer = styled(Paper)({
  margin: "1rem 0",
  padding: ".5rem .5rem"
});

class AuditorForm extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    type: "",
    country: "",
    amountOfAudits: {
      nz: {
        lead: "",
        support: "",
        inTraining: "",
        observer: ""
      },
      au: {
        lead: "",
        support: "",
        inTraining: "",
        observer: ""
      }
    }
  };

  onChange = ({ target }, area) => {
    if (Object.keys(target).length === 2) {
      this.setState({ [target.name]: target.value });
    } else {
      const name = target.getAttribute("name");
      if (area === "nz" || area === "au") {
        return this.setState(prevState => ({
          amountOfAudits: {
            ...prevState.amountOfAudits,
            [area]: { ...prevState.amountOfAudits[area], [name]: target.value }
          }
        }));
      }
      this.setState({ [name]: target.value });
    }
  };

  onClick = ({ target: { innerText: btn } }) => {
    if (btn === "CANCEL") {
      return this.props.history.push("/contacts");
    }
    this.props.addAuditor(this.state);
  };

  renderInput = () => {
    const items = ["firstname", "lastname"];
    const { email, mobile } = this.state;
    return (
      <FormControl>
        {items.map(item => {
          return (
            <TextField
              key={item}
              name={item}
              onChange={this.onChange}
              value={_.capitalize(this.state[item])}
            />
          );
        })}
        <TextField
          name="email"
          onChange={this.onChange}
          value={email}
          type="email"
        />
        <TextField name="mobile" onChange={this.onChange} value={mobile} />
      </FormControl>
    );
  };

  renderSelect = () => (
    <div style={{ display: "flex" }}>
      <div>
        <Select
          name="type"
          onChange={this.onChange}
          value={this.state.type}
          items={["Observer", "In Training", "Support", "Lead"]}
        />
      </div>
      <div>
        <Select
          name="country"
          onChange={this.onChange}
          value={this.state.country}
          items={["NZ", "AU", "NZ/AU"]}
        />
      </div>
    </div>
  );

  renderOptional = area => {
    const items = ["lead", "support", "inTraining", "observer"];
    return (
      <OptionalContainer elevation={2}>
        <Grid container>
          <Grid item xl={12}>
            <div
              style={{
                margin: ".5rem auto 0",
                textAlign: "center",
                fontFamily: "Work Sans",
                color: "#303F9F"
              }}
            >
              Audits done in{" "}
              <span style={{ textDecoration: "underline" }}>
                {_.upperCase(area)}
              </span>
            </div>
          </Grid>
          {items.map(item => {
            return (
              <Grid key={item} item xl={3}>
                <TextField
                  style={{ marginTop: "0" }}
                  type="number"
                  name={item}
                  onChange={e => this.onChange(e, area)}
                  value={this.state.amountOfAudits[item]}
                />
              </Grid>
            );
          })}
        </Grid>
      </OptionalContainer>
    );
  };

  renderButtons = () => {
    const names = ["Submit", "Cancel"];
    return (
      <Grid container spacing={2}>
        {names.map(name => (
          <Grid key={name} item xl={6}>
            <Button
              color="primary"
              onClick={this.onClick}
              fullWidth
              name={name}
            />
          </Grid>
        ))}
      </Grid>
    );
  };

  render() {
    return (
      <Grid container>
        <Grid item xl={12}>
          <MainContainer elevation={10}>
            <form
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <Header />
              {this.renderInput()}
              {this.renderSelect()}
              {this.renderOptional("nz")}
              {this.renderOptional("au")}
              {this.renderButtons()}
            </form>
          </MainContainer>
        </Grid>
      </Grid>
    );
  }
}

export default connect(
  null,
  { ...auditor }
)(withRouter(AuditorForm));
