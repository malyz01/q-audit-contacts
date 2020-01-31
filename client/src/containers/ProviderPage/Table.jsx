import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MaterialTable from "material-table";
import Box from "@material-ui/core/Box";
import { FabNew } from "../../components/FormComponent";

const ProviderPage = ({ history, providers }) => {
  const [selectedRow, setSelectedRow] = useState(null);

  const data = providers.map(({ _id, isActive, data }) => ({
    _id,
    legalName: data.legalName,
    tradingName: data.tradingName,
    abn: data.abn,
    acn: data.acn,
    country: data.country,
    isActive: isActive ? "Active" : "InActive"
  }));
  const columns = [
    { title: "Legal Name", field: "legalName" },
    { title: "Trading Name", field: "tradingName" },
    {
      title: "ABN",
      field: "abn"
    },
    {
      title: "ACN",
      field: "acn"
    },
    { title: "Country", field: "country" },
    { title: "Status", field: "isActive" }
  ];

  const handleOnClick = () => {
    history.push(`/providers/new`);
  };

  return (
    <div>
      <Box mb={1}>
        <FabNew color="primary" onClick={handleOnClick} name="Provider" />
        <button onClick={() => setSelectedRow(null)}>Clear</button>
      </Box>
      <MaterialTable
        title="Provider List"
        columns={columns}
        data={data}
        onRowClick={(e, data) => setSelectedRow(data)}
        options={{
          rowStyle: rowData => ({
            backgroundColor:
              selectedRow && selectedRow.tableData.id === rowData.tableData.id
                ? "#EEE"
                : "#FFF"
          }),
          pageSize: 10,
          pageSizeOptions: [5, 10, 20],
          searchFieldAlignment: "left",
          showTitle: false
        }}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  providers: state.providers.all
});

export default connect(mapStateToProps)(withRouter(ProviderPage));
