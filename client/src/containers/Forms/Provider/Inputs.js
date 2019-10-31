import React from "react";

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment
} from "@material-ui/core";
import { styled } from "@material-ui/styles";

const InputContainer = styled(FormControl)({
  margin: "0.5rem 1rem",
  width: "95%"
});

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
      <InputContainer variant="outlined">
        <InputLabel htmlFor="legalName">Legal Name</InputLabel>
        <OutlinedInput
          id="legalName"
          inputProps={{ autoComplete: "off" }}
          value={values.legalName}
          onChange={handleChange("legalName")}
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          labelWidth={88}
        />
      </InputContainer>
      <InputContainer variant="outlined">
        <InputLabel htmlFor="tradingName">Trading Name</InputLabel>
        <OutlinedInput
          id="tradingName"
          value={values.tradingName}
          onChange={handleChange("tradingName")}
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          labelWidth={104}
        />
      </InputContainer>
      <InputContainer variant="outlined">
        <InputLabel htmlFor="applicationRefNumber">App Ref Number</InputLabel>
        <OutlinedInput
          id="applicationRefNumber"
          value={values.applicationRefNumber}
          onChange={handleChange("applicationRefNumber")}
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          labelWidth={121}
        />
      </InputContainer>
      <InputContainer variant="outlined">
        <InputLabel htmlFor="registrationNumber">
          Registration Number
        </InputLabel>
        <OutlinedInput
          id="registrationNumber"
          value={values.registrationNumber}
          onChange={handleChange("registrationNumber")}
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          labelWidth={151}
        />
      </InputContainer>
      <InputContainer variant="outlined">
        <InputLabel htmlFor="location">Location</InputLabel>
        <OutlinedInput
          id="location"
          value={values.location}
          onChange={handleChange("location")}
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          labelWidth={65}
        />
      </InputContainer>
      <InputContainer variant="outlined">
        <InputLabel htmlFor="country">Country</InputLabel>
        <OutlinedInput
          id="country"
          autoComplete="false"
          value={values.country}
          onChange={handleChange("country")}
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          labelWidth={60}
        />
      </InputContainer>
    </>
  );
};

export default Inputs;
