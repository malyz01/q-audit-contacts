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
  let label = "";
  switch (props.name) {
    case "inTraining":
      label = "In Training";
      break;
    case "mobile1":
      label = "Mobile";
      break;
    case "mobile2":
      label = "Mobile 2";
      break;
    default:
      label = _.capitalize(props.name);
      break;
  }
  return (
    <TextField
      {...props}
      label={label}
      className={classes.textField}
      margin="normal"
    />
  );
}
