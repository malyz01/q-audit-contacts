import React, { Component } from "react";
import ReactTable from "react-table";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import _ from "lodash";

import "./index.css";
import { Grow } from "@material-ui/core";

// import { genData } from "../../helpers";
import Loader from "../../components/Loader";
import Buttons from "./Buttons";
import { FabAdd, Header } from "../../components/FormComponent";
import columns from "./columns";
import { auditor } from "../../store/actions";

// const data = genData(10);

export class Main extends Component {
  componentDidMount() {
    this.props.fetchAuditors();
  }

  componentWillUnmount() {
    this.props.clearAuditor();
  }

  handleOnClick = async ({ target: { innerText: name } }) => {
    switch (name) {
      case "VIEW":
        return alert("VIEW button clicked");
      case "EDIT":
        return this.props.history.push(
          `/auditor/${this.props.selected._id}/edit`
        );
      case "DELETE":
        const result = await this.props.deleteAuditor(this.props.selected._id);
        if (result) {
          this.props.fetchAuditors();
        }
        break;
      case "CLEAR":
        this.props.clearAuditor();
        break;
      case "ADD":
        return this.props.history.push("/auditor/new");
      default:
        break;
    }
  };

  handleTdProps = (state, rowInfo, column, instance) => {
    if (column.id.includes("nz") || column.id.includes("au")) {
      return {
        style: {
          textAlign: "center",
          alignSelf: "center"
        }
      };
    } else {
      return {
        style: {
          alignSelf: "center"
        }
      };
    }
  };

  handleTrProps = (state, rowInfo, column, instance) => {
    const { selectAuditor, selected } = this.props;
    if (rowInfo && rowInfo.row) {
      return {
        onClick: e => {
          rowInfo.original.index = rowInfo.index;
          selectAuditor(rowInfo.original);
        },
        style: {
          borderLeft: rowInfo.index === selected.index && "4px solid #3F51B5",
          backgroundColor: rowInfo.index === selected.index && "#eaf0ff"
        }
      };
    } else {
      return {};
    }
  };

  renderButtons = () => {
    return (
      <div className="buttonContainer">
        <FabAdd color="primary" onClick={this.handleOnClick} name="Add" />
        <Grow in={!_.isEmpty(this.props.selected)}>
          <Buttons onClick={this.handleOnClick} />
        </Grow>
      </div>
    );
  };

  renderTable = () => {
    return (
      <ReactTable
        filterable
        defaultFilterMethod={(filter, row) =>
          _.lowerCase(String(row[filter.id])).includes(
            _.lowerCase(filter.value)
          )
        }
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
          this.props.clearAuditor();
        }}
        className="contactContainer"
      >
        <div onClick={e => e.stopPropagation()}>
          <Header />
          {this.renderButtons()}
          {this.renderTable()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auditors: state.auditor.all,
  selected: state.auditor.selected
});

export default connect(
  mapStateToProps,
  { ...auditor }
)(withRouter(Main));
