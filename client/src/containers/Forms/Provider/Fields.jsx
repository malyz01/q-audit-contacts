import React from "react";
import { Field } from "redux-form";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import styled from "@material-ui/core/styles/styled";

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

export const renderContacts = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    {fields.map((contacts, index) => (
      <li key={index}>
        <h4>Contact {index + 1}</h4>
        <Field
          name={`${contacts}.name`}
          type="text"
          component={renderField}
          label="Full name"
        />
        <Field
          name={`${contacts}.email`}
          type="text"
          component={renderField}
          label="Email"
        />
        <Field
          name={`${contacts}.mobile`}
          type="text"
          component={renderField}
          label="Mobile"
        />
        {fields.length > 1 && (
          <StyledBtn
            variant="outlined"
            type="button"
            title="Remove"
            color="secondary"
            onClick={() => fields.remove(index)}
          >
            Remove
          </StyledBtn>
        )}
      </li>
    ))}
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        paddingTop: ".5rem"
      }}
    >
      <StyledBtn
        variant="contained"
        color="primary"
        type="button"
        onClick={() => fields.push({})}
      >
        Add Contact
      </StyledBtn>
      {submitFailed && error && <span>{error}</span>}
    </div>
  </ul>
);

export const renderOutlets = ({ fields, meta: { error, submitFailed } }) => (
  <div style={{ paddingLeft: "4rem" }}>
    {fields.map((outlet, index) => (
      <div key={index}>
        <h4>Outlet {index + 1}</h4>
        <Field
          name={`${outlet}.name`}
          type="text"
          component={renderField}
          label="Branch name"
        />
        <Field
          name={`${outlet}.address`}
          type="text"
          component={renderField}
          label="Address"
        />
        <StyledBtn
          variant="outlined"
          type="button"
          title="Remove"
          color="secondary"
          onClick={() => fields.remove(index)}
        >
          Remove
        </StyledBtn>
      </div>
    ))}
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        paddingTop: ".5rem"
      }}
    >
      <StyledBtn
        variant="contained"
        type="button"
        color="primary"
        onClick={() => fields.push({})}
      >
        Add Outlet
      </StyledBtn>
      {submitFailed && error && <span>{error}</span>}
    </div>
  </div>
);
