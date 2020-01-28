import React from "react";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FabNew } from "../../components/FormComponent";

const ProviderPage = ({ history }) => {
  const [state, setState] = React.useState({
    columns: [
      { title: "Legal Name", field: "legalName" },
      { title: "Trading Name", field: "tradingName" },
      { title: "Application Ref Number", field: "applicationRefNumber" },
      {
        title: "Registration Number",
        field: "registrationNumber"
      },
      { title: "Head Office", field: "headOffice" },
      { title: "Country", field: "country" }
    ],
    data: [
      {
        legalName: "Mehmet",
        tradingName: "Baran",
        applicationRefNumber: "A-SDAS",
        registrationNumber: "ASDQW",
        headOffice: "",
        country: ""
      },
      {
        legalName: "Second",
        tradingName: "Provider",
        applicationRefNumber: "A-SDAS",
        registrationNumber: "ASDQW",
        headOffice: "",
        country: ""
      }
    ]
  });

  const handleOnClick = () => {
    history.push(`/providers/new`);
  };

  return (
    <div>
      <FabNew color="primary" onClick={handleOnClick} name="Provider" />
      <MaterialTable
        title="Provider List"
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
    </div>
  );
};

const mapStateToProps = state => ({
  providers: state
});

export default connect(mapStateToProps)(withRouter(ProviderPage));
