import React from "react";
import { Container, Paper, Grid, Box } from "@material-ui/core";

import { FirstColumn, SecondColumn } from "./Content";

class index extends React.Component {
  render() {
    return (
      <Container maxWidth="lg">
        <Box my={5}>
          <Paper>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box height="600px">
                  <FirstColumn />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box height="600px">
                  <SecondColumn />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    );
  }
}

export default index;
