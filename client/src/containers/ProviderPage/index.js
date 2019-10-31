import React from "react";
import { Container, Button } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const AcceptBtn = styled(Button)({
  backgroundColor: "red"
});

class index extends React.Component {
  render() {
    return (
      <Container>
        <AcceptBtn variant="contained">Try</AcceptBtn>

        <h3>Provider details</h3>
      </Container>
    );
  }
}

export default index;
