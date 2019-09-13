import React, { Component } from "react";
import ReactTable from "react-table";

import "./index.css";

const data = [
  {
    name: "Tanner Linsley",
    email: "tanner@yahoo.com",
    mobile: "0064021523602"
  },
  {
    name: "Annie",
    email: "annie@yahoo.com",
    mobile: "0064021523602"
  }
];

const columns = [
  {
    Header: "Name",
    accessor: "name"
  },
  {
    Header: "Email",
    accessor: "email",
    Cell: row => (
      <div className="cellRender">
        <div>{row.value}</div>
        <button>click</button>
      </div>
    )
  },
  {
    Header: "Mobile",
    accessor: "mobile"
  }
];

export class Main extends Component {
  renderHeader = () => {
    return (
      <div className="contactHeader">
        <h1>Contact List</h1>
      </div>
    );
  };

  renderSearchBar = () => {
    return (
      <div className="searchBar">
        <input type="text" />
      </div>
    );
  };

  renderTable = () => {
    return <div></div>;
  };

  render() {
    return (
      <div className="contactContainer">
        {this.renderHeader()}
        <ReactTable data={data} columns={columns} />
      </div>
    );
  }
}

export default Main;
