import React, { Component } from "react";
import ReactTable from "react-table";

import "./index.css";

import { genData } from "../../helpers";

const columns = [
  {
    Header: "Name",
    columns: [
      {
        Header: "Firstname",
        accessor: "firstname"
      },
      {
        Header: "Lastname",
        accessor: "lastname"
      }
    ]
  },
  {
    Header: "Email",
    accessor: "email"
  },
  {
    Header: "Mobile",
    accessor: "mobile"
  },
  {
    Header: "NZ # of Audits Done",
    columns: [
      {
        Header: "Observer",
        id: "nzObserver",
        accessor: d => d.amountOfAudits.nz.observer
      },
      {
        Header: "In Training",
        id: "nzInTraining",
        accessor: d => d.amountOfAudits.nz.inTraining
      },
      {
        Header: "Support",
        id: "nzSupport",
        accessor: d => d.amountOfAudits.nz.support
      },
      {
        Header: "Lead",
        id: "nzLead",
        accessor: d => d.amountOfAudits.nz.lead
      }
    ]
  },
  {
    Header: "AU # of Audits Done",
    columns: [
      {
        Header: "Observer",
        id: "auObserver",
        accessor: d => d.amountOfAudits.au.observer
      },
      {
        Header: "In Training",
        id: "auInTraining",
        accessor: d => d.amountOfAudits.au.inTraining
      },
      {
        Header: "Support",
        id: "auSupport",
        accessor: d => d.amountOfAudits.au.support
      },
      {
        Header: "Lead",
        id: "auLead",
        accessor: d => d.amountOfAudits.au.lead
      }
    ]
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
        <ReactTable filterable data={genData(20)} columns={columns} />
      </div>
    );
  }
}

export default Main;
