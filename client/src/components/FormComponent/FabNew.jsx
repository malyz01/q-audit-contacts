import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function FloatingActionButtons(props) {
  const classes = useStyles();

  return (
    <Fab
      {...props}
      variant="extended"
      aria-label={props.name}
      className={classes.fab}
    >
      <AddCircleOutlineIcon className={classes.extendedIcon} />
      {props.name}
    </Fab>
  );
}
