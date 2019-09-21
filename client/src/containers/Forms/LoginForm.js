import React from "react";
import { FormControl, TextField, Grid, Paper } from "@material-ui/core";
import VpnKeyRoundedIcon from "@material-ui/icons/VpnKeyRounded";

import { styled } from "@material-ui/styles";

import { Button } from "../../components/FormComponent";

const StylePaper = styled(Paper)({
  marginTop: "4rem",
  padding: "1rem"
});

class Login extends React.Component {
  handleOnClick = () => {
    console.log("clicked");
  };

  renderField = () => (
    <>
      <TextField
        label="Username"
        type="text"
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Password"
        type="password"
        margin="normal"
        variant="outlined"
      />
    </>
  );

  render() {
    return (
      <Grid container justify="center">
        <Grid xl={3} item>
          <StylePaper elevation={10}>
            <FormControl fullWidth>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.5rem",
                  paddingRight: "1.5rem"
                }}
              >
                <VpnKeyRoundedIcon color="primary" fontSize="large" /> LOGIN
              </div>

              {this.renderField()}
              <Button color="primary" size="large" onClick={this.handleOnClick}>
                Submit
              </Button>
            </FormControl>
          </StylePaper>
        </Grid>
      </Grid>
    );
  }
}

export default Login;
