import React from "react";

export default [
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
