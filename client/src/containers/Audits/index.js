import React from "react";
import { Container, Box } from "@material-ui/core";

import Table from "./Table";

class index extends React.Component {
  render() {
    return (
      <Container>
        <Box mt={2}>
          <Table />
        </Box>
      </Container>
    );
  }
}

export default index;
