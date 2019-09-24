import React from "react";

import { Paper } from "@material-ui/core";

export default props => {
  console.log(props);
  return (
    <Paper>
      <h1>Confirm delete</h1>
      <p>Are you sure you want to delete:</p>
      <button {...props}>Submit</button>
    </Paper>
  );
};
