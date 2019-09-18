import React from "react";
import _ from "lodash";

import { FormControl, InputLabel, OutlinedInput } from "@material-ui/core";

class AuditorForm extends React.Component {
  state = {
    name: "",
    email: "",
    mobile: ""
  };

  onChange = (value, name) => {
    console.log(value);
    console.log(name);
  };

  renderInput = name => {
    return (
      <FormControl>
        <InputLabel>{_.capitalize(name)}</InputLabel>
        <OutlinedInput
          onChange={({ target: { value } }) => this.onChange(value, name)}
        />
      </FormControl>
    );
  };

  render() {
    return (
      <div style={{ padding: "4rem 0 0 0 " }}>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "500px",
            margin: "0 auto"
          }}
        >
          {this.renderInput("name")}
          {this.renderInput("email")}
          {this.renderInput("mobile")}
          {this.renderInput("type")}
        </form>
      </div>
    );
  }
}

export default AuditorForm;
