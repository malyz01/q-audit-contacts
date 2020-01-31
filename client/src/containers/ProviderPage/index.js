import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import Box from "@material-ui/core/Box";
import "./index.css";

import Table from "./Table";
import Loading from "../../components/Loader";
import { provider } from "../../store/actions";

class index extends React.Component {
  componentDidMount() {
    this.props.fetchProviders();
  }

  componentWillUnmount() {
    this.props.allClearProvider();
  }

  render() {
    if (_.isEmpty(this.props.providers)) {
      return <Loading />;
    }
    return (
      <Box mt={2} mx="auto" width="80%">
        <Table />
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  providers: state.providers.all
});

export default connect(mapStateToProps, { ...provider })(index);
