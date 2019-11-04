import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import styled from "@material-ui/styles/styled";

const InputContainer = styled(FormControl)({
  margin: "0.5rem 1rem"
});

const Input = ({ handleChange, values, name, label, lw }) => {
  return (
    <InputContainer fullWidth variant="outlined">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput
        id={name}
        name={name}
        type="text"
        value={values.legalName}
        onChange={handleChange}
        startAdornment={<InputAdornment position="start"> </InputAdornment>}
        labelWidth={lw}
      />
    </InputContainer>
  );
};

export default Input;
