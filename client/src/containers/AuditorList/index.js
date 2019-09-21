import React, { Component } from "react";
import ReactTable from "react-table";
import { withRouter } from "react-router-dom";

import "./index.css";

import { genData } from "../../helpers";
import { Button } from "../../components/FormComponent";
import columns from "./columns";

const data = genData(2);

export class Main extends Component {
  state = { selected: null };

  handleButton = () => {
    this.props.history.push("/newAuditor");
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
            rowInfo.index === this.state.selected ? "#94d4fc" : "white",
          color: rowInfo.index === this.state.selected ? "white" : "black"
        }
      };
    } else {
      return {};
    }
  };

  renderHeader = () => {
    return (
      <div className="contactHeader">
        <h1>Auditor List</h1>
      </div>
    );
  };

  renderTable = () => {
    return (
      <ReactTable
        filterable
        data={data}
        columns={columns}
        className="contactsTable"
        getTdProps={this.handleTdProps}
        getTrProps={this.handleTrProps}
        defaultPageSize={10}
      />
    );
  };

  render() {
    return (
      <div className="contactContainer">
        {this.renderHeader()}
        <div className="buttonContainer">
          <Button onClick={this.handleButton}>Add</Button>
        </div>
        {this.renderTable()}
      </div>
    );
  }
}

export default withRouter(Main);
