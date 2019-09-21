import React from "react";
// import _ from "lodash";
import { Grid, FormControl, Paper } from "@material-ui/core";
import { styled } from "@material-ui/styles";

import { TextField, Select } from "../../components/FormComponent";

const StyledPaper = styled(Paper)({
  padding: "1rem 0 3rem",
  marginTop: "4rem"
});

class AuditorForm extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    type: "",
    country: ""
  };

  onChange = ({ target }) => {
    if (Object.keys(target).length === 2) {
      this.setState({ [target.name]: target.value });
    } else {
      const name = target.getAttribute("name");
      this.setState({ [name]: target.value });
    }
  };

  renderHeader = () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h2>Auditor</h2>
    </div>
  );

  renderInput = () => {
    const { firstname, lastname, email, mobile } = this.state;
    return (
      <FormControl>
        <TextField
          name="firstname"
          onChange={this.onChange}
          value={firstname}
        />
        <TextField name="lastname" onChange={this.onChange} value={lastname} />
        <TextField name="email" onChange={this.onChange} value={email} />
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

  render() {
    console.log(this.state);
    return (
      <Grid container justify="center">
        <Grid item xl={4}>
          <StyledPaper elevation={10}>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                width: "500px",
                margin: "0 auto"
              }}
            >
              {this.renderHeader()}
              {this.renderInput()}
              {this.renderSelect()}
            </form>
          </StyledPaper>
        </Grid>
      </Grid>
    );
  }
}

export default AuditorForm;
