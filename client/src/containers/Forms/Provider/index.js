import React from "react";

import { Container, Paper, Grid, Box } from "@material-ui/core";

import Inputs from "./Inputs";

class index extends React.Component {
  render() {
    return (
      <Container maxWidth="lg">
        <Box my={5}>
          <Paper>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box height="600px">
                  <Inputs />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box height="600px">2nd Column</Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    );
  }
}

export default index;
