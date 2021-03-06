import React from "react";
import { withRouter } from "react-router-dom";

import { styled } from "@material-ui/styles";

import { Toolbar, Typography, AppBar } from "@material-ui/core";

const StyledAppBar = styled(AppBar)({
  marginBottom: "1rem"
});

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
      <StyledTypography onClick={this.handleOnClick} to="/" variant="h6">
        Home
      </StyledTypography>
      <StyledTypography
        onClick={this.handleOnClick}
        to="/providers"
        variant="h6"
      >
        Providers
      </StyledTypography>
      <StyledTypography onClick={this.handleOnClick} to="/audits" variant="h6">
        Audits
      </StyledTypography>
      <StyledTypography
        onClick={this.handleOnClick}
        to="/contacts"
        variant="h6"
      >
        Contacts
      </StyledTypography>
    </StyledToolbar>
  );

  render() {
    return (
      <StyledAppBar position="static">
        <Toolbar>{this.renderToolbar()}</Toolbar>
      </StyledAppBar>
    );
  }
}

export default withRouter(Navigation);
