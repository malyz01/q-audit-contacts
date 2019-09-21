import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: "8px 0"
  },
  input: {
    display: "none"
  }
}));

export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <Button {...props} variant="contained" className={classes.button}>
      {props.children}
    </Button>
  );
}
