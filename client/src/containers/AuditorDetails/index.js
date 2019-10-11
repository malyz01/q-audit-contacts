import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { Container, Grid, Box, Paper } from "@material-ui/core";

import Loader from "../../components/Loader";
import AuditView from "./AuditView";
import AuditsDone from "./AuditsDone";
import { auditor } from "../../store/actions";

const pending = {
  type: "Pending"
};
const completed = {
  type: "Completed"
};

class index extends React.Component {
  componentDidMount() {
    this.props.fetchAuditor(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearAuditor();
  }

  render() {
    const { auditor } = this.props;
    if (_.isEmpty(auditor)) {
      return <Loader />;
    }

    return (
      <Container>
        <Box mt={2} fontFamily="Roboto" fontSize="h4.fontSize" fontWeight={500}>
          {auditor.firstname} {auditor.lastname}
        </Box>
        <Box mb={2} fontFamily="Roboto" fontSize="h6.fontSize">
          {auditor.type}
        </Box>
        <Grid justify="center" spacing={3} container>
          <Grid item xs={12} md={12}>
            <Paper elevation={2}>
              <AuditView />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <AuditsDone audit={completed} />
          </Grid>
          <Grid item xs={12} md={6}>
            <AuditsDone audit={pending} />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auditor: state.auditor.selected
});

export default connect(
  mapStateToProps,
  { ...auditor }
)(index);
