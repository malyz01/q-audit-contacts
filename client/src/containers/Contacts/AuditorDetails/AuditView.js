import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { auditor } from "../../../store/actions";

const data = {};

class AuditView extends React.Component {
  render() {
    if (_.isEmpty(data)) {
      return (
        <div
          style={{ height: "400px", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              alignSelf: "center"
            }}
          >
            <h3>Please select one from below</h3>
          </div>
        </div>
      );
    }
    return (
      <div style={{ padding: "1rem" }}>
        <h4>Start Date:</h4>
        <div>7-7-7</div>
        <h4>End Date:</h4>
        <div>7-7-7</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.auditor.selected
});

export default connect(mapStateToProps, { ...auditor })(AuditView);
