import React from "react";

import { FormControl } from "@material-ui/core";

export const Inputs = () => {
  return (
    <FormControl fullWidth className={classes.margin} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        value={values.amount}
        onChange={handleChange("amount")}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        labelWidth={60}
      />
    </FormControl>
  );
};

export default Inputs;
