import React from "react";
import _ from "lodash";

export default [
  {
    Header: "ID",
    accessor: "_id",
    show: false
  },
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
    accessor: "mobile",
    Cell: ({ value }) => <div style={{ textAlign: "center" }}>{value}</div>
  },
  {
    Header: "Type",
    accessor: "type",
    Cell: ({ value }) => <div style={{ textAlign: "center" }}>{value}</div>
  },
  {
    Header: "Country",
    accessor: "country",
    maxWidth: 100,
    Cell: ({ value }) => <div style={{ textAlign: "center" }}>{value}</div>,
    filterMethod: (filter, row) =>
      _.lowerCase(row[filter.id]).includes(_.lowerCase(filter.value))
  },
  {
    Header: "NZ # of Audits Done",
    columns: [
      {
        Header: "Observer",
        id: "nzObserver",
        accessor: d => d.amountOfAudits.nz.observer,
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
