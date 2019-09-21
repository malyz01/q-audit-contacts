import React from "react";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 235
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const items = items => {
  return items.map(item => {
    return (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    );
  });
};

export default function SelectList(props) {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor={props.name}>{_.capitalize(props.name)}</InputLabel>
      <Select
        {...props}
        inputProps={{
          name: props.name,
          id: props.name
        }}
      >
        {items(props.items)}
      </Select>
    </FormControl>
  );
}
