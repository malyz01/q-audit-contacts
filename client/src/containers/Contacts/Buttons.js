import React from "react";
import {
  FabView,
  FabEdit,
  FabDel,
  FabClear
} from "../../components/FormComponent";

export default props => (
  <div {...props}>
    <FabView color="primary" name="View" />
    <FabEdit color="primary" name="Edit" />
    <FabDel color="primary" name="Delete" />
    <FabClear color="primary" name="Clear" />
  </div>
);
