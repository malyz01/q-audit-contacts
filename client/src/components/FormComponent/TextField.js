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

  return (
    <TextField
      {...props}
      label={_.capitalize(props.name)}
      className={classes.textField}
      margin="normal"
    />
  );
}
