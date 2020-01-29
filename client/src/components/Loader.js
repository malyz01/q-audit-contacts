import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  }
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        height: "60vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          fontSize: "40px",
          fontFamily: "work sans",
          color: "#4756aa"
        }}
      >
        Loading
      </div>
      <div>
        <CircularProgress
          size={20}
          thickness={7}
          className={classes.progress}
        />
      </div>
    </div>
  );
}
