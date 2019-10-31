import React from "react";

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment
} from "@material-ui/core";

export const Inputs = () => {
  const [values, setValues] = React.useState({
    legalName: "",
    tradingName: "",
    applicationRefNumber: "",
    registrationNumber: "",
    location: "",
    country: ""
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="legalName">Legal Name</InputLabel>
        <OutlinedInput
          id="legalName"
          value={values.legalName}
          onChange={handleChange("legalName")}
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          labelWidth={90}
        />
      </FormControl>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="tradingName">Trading Name</InputLabel>
        <OutlinedInput
          id="tradingName"
          value={values.tradingName}
          onChange={handleChange("tradingName")}
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          labelWidth={100}
        />
      </FormControl>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="applicationRefNumber">App Ref Number</InputLabel>
        <OutlinedInput
          id="applicationRefNumber"
          value={values.applicationRefNumber}
          onChange={handleChange("applicationRefNumber")}
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          labelWidth={120}
        />
      </FormControl>
    </>
  );
};

export default Inputs;
