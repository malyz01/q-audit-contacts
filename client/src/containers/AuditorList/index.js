import React, { Component } from "react";
import ReactTable from "react-table";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import _ from "lodash";

import "./index.css";

import { genData } from "../../helpers";
import Loader from "../../components/Loader";
import {
  FabAdd,
  FabView,
  FabDel,
  FabClear,
  Header
} from "../../components/FormComponent";
import columns from "./columns";
import { auditor } from "../../store/actions";

const data = genData(2);

export class Main extends Component {
  state = { selected: null };

  componentDidMount() {
    this.props.fetchAuditors();
  }

  handleOnClick = ({ target: { innerText: name } }) => {
    switch (name) {
      case "VIEW":
        return alert("View Selected");
      case "DELETE":
        return alert("Delete Selected");
      case "CLEAR":
        return this.setState({ selected: null });
      case "ADD":
        return this.props.history.push("/newAuditor");
      default:
        break;
    }
  };

  handleTdProps = (state, rowInfo, column, instance) => {
    if (column.id.includes("nz") || column.id.includes("au")) {
      return {
        style: {
          textAlign: "center"
        }
      };
    } else {
      return {};
    }
  };

  handleTrProps = (state, rowInfo, column, instance) => {
    if (rowInfo && rowInfo.row) {
      return {
        onClick: e => {
          this.setState({
            selected: rowInfo.index
          });
        },
        style: {
          background:
            rowInfo.index === this.state.selected ? "#616dad" : "white",
          color: rowInfo.index === this.state.selected ? "white" : "black"
        }
      };
    } else {
      return {};
    }
  };

  renderHeader = () => {
    return (
      <div style={{ marginTop: "2rem" }}>
        <Header />
      </div>
    );
  };

  renderButtons = () => {
    return (
      <div className="buttonContainer">
        <div>
          <FabView color="primary" onClick={this.handleOnClick} name="View" />
          <FabDel color="primary" onClick={this.handleOnClick} name="Delete" />
          <FabClear color="primary" onClick={this.handleOnClick} name="Clear" />
        </div>
        <FabAdd color="primary" onClick={this.handleOnClick} name="Add" />
      </div>
    );
  };

  renderTable = () => {
    return (
      <ReactTable
        filterable
        data={this.props.auditors}
        columns={columns}
        className="contactsTable"
        getTdProps={this.handleTdProps}
        getTrProps={this.handleTrProps}
        defaultPageSize={20}
      />
    );
  };

  render() {
    if (_.isEmpty(this.props.auditors)) {
      return <Loader />;
    }
    return (
      <div
        onClick={e => {
          e.preventDefault();
          this.setState({ selected: null });
        }}
        className="contactContainer"
      >
        <div onClick={e => e.stopPropagation()}>
          {this.renderHeader()}
          {this.renderButtons()}
          {this.renderTable()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auditors: state.auditor.all
});

export default connect(
  mapStateToProps,
  { ...auditor }
)(withRouter(Main));
