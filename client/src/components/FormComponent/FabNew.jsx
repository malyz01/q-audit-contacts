import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: ".2rem"
  }
}));

export default function FloatingActionButtons(props) {
  const classes = useStyles();

  return (
    <Fab
      {...props}
      variant="extended"
      size="medium"
      aria-label={props.name}
      className={classes.fab}
    >
      <LibraryAddIcon className={classes.extendedIcon} />
      <div style={{ marginRight: ".5rem" }}>{props.name}</div>
    </Fab>
  );
}
