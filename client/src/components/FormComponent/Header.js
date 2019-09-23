import React from "react";

import { CardMedia } from "@material-ui/core";

export default props => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "2rem"
    }}
  >
    <div style={{ width: "200px", marginBottom: "1rem" }}>
      <CardMedia
        component="img"
        alt="Q-Audit"
        image="/Logo.JPG"
        title="Q-Audit"
      />
    </div>
    {props.children}
  </div>
);
