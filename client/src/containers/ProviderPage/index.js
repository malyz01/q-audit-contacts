import React from "react";
import { Container, Button, Box } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Table from "./Table";

class index extends React.Component {
  render() {
    return (
      <Container>
        <Box pt={2}>
          <Button variant="contained">
            <AddIcon /> PROVIDER
          </Button>

          <Box mt={3} fontSize="h5.fontSize">
            Provider Lists:
          </Box>
          <Table />
        </Box>
      </Container>
    );
  }
}

export default index;
