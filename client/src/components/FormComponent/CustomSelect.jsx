import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

export default ({ input, label, data, type, meta: { touched, error } }) => {
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <InputLabel>{label}</InputLabel>
      <div>
        <Select
          value={value}
          onChange={handleChange}
          fullWidth
          {...input}
          type={type}
        >
          {data.map(d => (
            <MenuItem value={d}>{d}</MenuItem>
          ))}
        </Select>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
};
