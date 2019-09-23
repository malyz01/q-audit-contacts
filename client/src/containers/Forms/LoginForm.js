import React from "react";
import { TextField, Grid, Paper } from "@material-ui/core";
import VpnKeyRoundedIcon from "@material-ui/icons/VpnKeyRounded";

import { styled } from "@material-ui/styles";

import { Button, Header } from "../../components/FormComponent";

const FormContainer = styled(Paper)({
  margin: "2rem auto",
  width: "400px",
  padding: "1rem"
});

class Login extends React.Component {
  handleOnClick = () => {
    alert("clicked");
  };

  renderHeader = () => (
    <Header>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.5rem",
          fontFamily: "Work Sans",
          color: "#303F9F"
        }}
      >
        <VpnKeyRoundedIcon color="primary" fontSize="large" /> LOGIN
      </div>
    </Header>
  );

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
      <Grid container>
        <Grid xl={12} item>
          <FormContainer elevation={10}>
            <form
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              {this.renderHeader()}
              {this.renderField()}
              <Button
                color="primary"
                name="Submit"
                size="large"
                onClick={this.handleOnClick}
              />
            </form>
          </FormContainer>
        </Grid>
      </Grid>
    );
  }
}

export default Login;
