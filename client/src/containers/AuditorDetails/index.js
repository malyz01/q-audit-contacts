import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { Container, Switch, Paper, Box } from "@material-ui/core";

import Loader from "../../components/Loader";
import { auditor } from "../../store/actions";

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
        <h1>
          {auditor.firstname} {auditor.lastname}
        </h1>
        <h2>{auditor.type}</h2>
        <Switch />
        <Paper>
          <Box p={3}>
            <Box component="div" textAlign="right" width={1 / 4}>
              Location:
            </Box>
            <Box component="div" textAlign="right" width={1 / 4}>
              Preferred Audit Location:
            </Box>
            <Box component="div" textAlign="right" width={1 / 4}>
              Observation Audits Confirmed:
            </Box>
          </Box>
        </Paper>
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
