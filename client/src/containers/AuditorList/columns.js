import React from "react";
import _ from "lodash";

export default [
  {
    Header: "ID",
    accessor: "_id",
    show: false
  },
  {
    Header: "NAME",
    columns: [
      {
        Header: "FIRSTNAME",
        accessor: "firstname"
      },
      {
        Header: "LASTNAME",
        accessor: "lastname"
      }
    ]
  },
  {
    Header: "EMAIL",
    accessor: "email"
  },
  {
    Header: "MOBILE",
    accessor: "mobile",
    Cell: ({ value }) => (
      <div style={{ textAlign: "center" }}>
        <div>{value[0]}</div>
        <div>{value[1]}</div>
      </div>
    )
  },
  {
    Header: "TYPE",
    accessor: "type",
    Cell: ({ value }) => <div style={{ textAlign: "center" }}>{value}</div>
  },
  {
    Header: "COUNTRY",
    accessor: "country",
    maxWidth: 100,
    Cell: ({ value }) => <div style={{ textAlign: "center" }}>{value}</div>,
    filterMethod: (filter, row) =>
      _.lowerCase(row[filter.id]).includes(_.lowerCase(filter.value))
  },
  {
    Header: "NZ - AUDITS DONE",
    columns: [
      {
        Header: "Obv",
        id: "nzObserver",
        accessor: d => d.amountOfAudits.nz.observer,
        maxWidth: 85
      },
      {
        Header: "IT",
        id: "nzInTraining",
        accessor: d => d.amountOfAudits.nz.inTraining,
        maxWidth: 85
      },
      {
        Header: "Supp",
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
    Header: "AU - AUDITS DONE",
    columns: [
      {
        Header: "Obv",
        id: "auObserver",
        accessor: d => d.amountOfAudits.au.observer,
        maxWidth: 85
      },
      {
        Header: "IT",
        id: "auInTraining",
        accessor: d => d.amountOfAudits.au.inTraining,
        maxWidth: 85
      },
      {
        Header: "Supp",
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
