import React from "react";
import { Container, Grid, Box } from "@material-ui/core";

import Content from "./Content";

class index extends React.Component {
  render() {
    return (
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Box mx="auto" pt={1.5} pb={3} maxWidth="600px">
              <Content />
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default index;
