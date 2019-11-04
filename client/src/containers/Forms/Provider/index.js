import React from "react";
import { Container, Grid, Box } from "@material-ui/core";

import Content from "./Content";

class index extends React.Component {
  render() {
    return (
      <Container maxWidth="lg">
        <Box my={5}>
          <Grid container>
            <Grid item xs={12}>
              <Box
                fontSize="h5.fontSize"
                display="flex"
                justifyContent="center"
                mt="1.5rem"
              >
                Enter New Provider
              </Box>
              <Box mx="auto" pt="1.5rem" maxWidth="600px" height="600px">
                <Content />
              </Box>
              <Box display="flex" justifyContent="center" mt="1.5rem"></Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }
}

export default index;
