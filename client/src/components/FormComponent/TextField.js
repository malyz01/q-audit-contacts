import React from "react";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

export default function TextFields(props) {
  const classes = useStyles();
  const label =
    props.name === "inTraining" ? "In Training" : _.capitalize(props.name);
  return (
    <TextField
      {...props}
      label={label}
      className={classes.textField}
      margin="normal"
    />
  );
}
