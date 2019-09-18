import React, { Component } from "react";
import ReactTable from "react-table";

import "./index.css";

import { genData } from "../../helpers";

const data = genData(20);

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
        accessor: d => d.amountOfAudits.nz.observer,
        Cell: props => (
          <div onClick={() => console.log(props)}>{props.value}</div>
        ),
        maxWidth: 85
      },
      {
        Header: "In Training",
        id: "nzInTraining",
        accessor: d => d.amountOfAudits.nz.inTraining,
        maxWidth: 85
      },
      {
        Header: "Support",
        id: "nzSupport",
        accessor: d => d.amountOfAudits.nz.support,
        maxWidth: 85
      },
      {
        Header: "Lead",
        id: "nzLead",
        accessor: d => d.amountOfAudits.nz.lead,
        maxWidth: 85
      }
    ]
  },
  {
    Header: "AU # of Audits Done",
    columns: [
      {
        Header: "Observer",
        id: "auObserver",
        accessor: d => d.amountOfAudits.au.observer,
        maxWidth: 85
      },
      {
        Header: "In Training",
        id: "auInTraining",
        accessor: d => d.amountOfAudits.au.inTraining,
        maxWidth: 85
      },
      {
        Header: "Support",
        id: "auSupport",
        accessor: d => d.amountOfAudits.au.support,
        maxWidth: 85
      },
      {
        Header: "Lead",
        id: "auLead",
        accessor: d => d.amountOfAudits.au.lead,
        maxWidth: 85
      }
    ]
  }
];

export class Main extends Component {
  state = { selected: null };

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
    return (
      <ReactTable
        filterable
        data={data}
        columns={columns}
        className="contactsTable"
        getTdProps={(state, rowInfo, column, instance) => {
          console.log(state);
          console.log(rowInfo);
          console.log(column);
          console.log(instance);
          if (column.id === "auLead") {
            return {
              style: {
                background: "aqua",
                textAlign: "center"
              }
            };
          } else {
            return {};
          }
        }}
        getTrProps={(state, rowInfo) => {
          if (rowInfo && rowInfo.row) {
            return {
              onClick: e => {
                this.setState({
                  selected: rowInfo.index
                });
              },
              style: {
                background:
                  rowInfo.index === this.state.selected ? "#00afec" : "white",
                color: rowInfo.index === this.state.selected ? "white" : "black"
              }
            };
          } else {
            return {};
          }
        }}
      />
    );
  };

  render() {
    console.log(this.state.selected);
    return (
      <div className="contactContainer">
        {this.renderHeader()}
        {this.renderTable()}
      </div>
    );
  }
}

export default Main;
