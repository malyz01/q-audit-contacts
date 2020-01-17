import React from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Trading Name", field: "tradingName" },
      { title: "Standards", field: "standards" },
      { title: "Audit Type", field: "auditType" },
      { title: "Audit Status", field: "auditStatus" }
    ],
    data: [
      {
        tradingName: "Timothy Glanvill",
        standards: "NDIS",
        auditType: "Verification",
        auditStatus: "Recommended"
      },
      {
        tradingName: "THE DISABILITY PHYSIO",
        standards: "NDIS",
        auditType: "Verification",
        auditStatus: "Recommended"
      },
      {
        tradingName: "DAR ALSALAM CARE",
        standards: "NDIS",
        auditType: "Verification",
        auditStatus: "In Progress"
      }
    ]
  });

  return (
    <MaterialTable
      title="Audit List"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}