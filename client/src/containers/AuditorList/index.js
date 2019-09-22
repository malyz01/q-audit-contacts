import React, { Component } from "react";
import ReactTable from "react-table";
import { withRouter } from "react-router-dom";

import "./index.css";

import { genData } from "../../helpers";
import { FabAdd, FabView, Header } from "../../components/FormComponent";
import columns from "./columns";

const data = genData(2);

export class Main extends Component {
  state = { selected: null };

  handleButton = ({ target: { innerText: name } }) => {
    switch (name) {
      case "VIEW":
        return alert("View Selected");
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
        <FabView color="primary" onClick={this.handleButton} name="View" />
        <FabAdd color="primary" onClick={this.handleButton} name="Add" />
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
        {this.renderButtons()}
        {this.renderTable()}
      </div>
    );
  }
}

export default withRouter(Main);
