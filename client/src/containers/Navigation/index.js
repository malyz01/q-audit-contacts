import React from "react";
import { withRouter } from "react-router-dom";

import { styled } from "@material-ui/styles";

import { Toolbar, Typography, AppBar } from "@material-ui/core";

const StyledTypography = styled(Typography)({
  margin: "0 1rem 0 0",
  cursor: "pointer"
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});

class Navigation extends React.Component {
  handleOnClick = e => {
    e.preventDefault();
    this.props.history.push(e.target.getAttribute("to"));
  };

  renderToolbar = () => (
    <StyledToolbar>
      <div style={{ display: "flex" }}>
        <StyledTypography onClick={this.handleOnClick} to="/" variant="h6">
          Home
        </StyledTypography>
        <StyledTypography
          onClick={this.handleOnClick}
          to="/audits"
          variant="h6"
        >
          Audit
        </StyledTypography>
        <StyledTypography
          onClick={this.handleOnClick}
          to="/contacts"
          variant="h6"
        >
          Contacts
        </StyledTypography>
      </div>

      <div>
        <StyledTypography onClick={this.handleOnClick} to="/login" variant="h6">
          Login
        </StyledTypography>
      </div>
    </StyledToolbar>
  );

  render() {
    return (
      <React.Fragment>
        <AppBar>{this.renderToolbar()}</AppBar>
        <Toolbar />
      </React.Fragment>
    );
  }
}

export default withRouter(Navigation);
