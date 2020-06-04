import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import styled from "@material-ui/core/styles/styled";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import "./index.css";

export const DatePickers = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <InputLabel>{label}</InputLabel>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          {...input}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export const StyledBtn = styled(Button)({
  marginLeft: "10px"
});

export const StyledPaper = styled(Paper)({
  margin: "2rem",
  padding: ".5rem 1rem"
});

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div style={{ marginBottom: "1rem" }}>
    <InputLabel>{label}</InputLabel>
    <div>
      <Input fullWidth {...input} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
