import React, { useState } from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "./validate";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { CustomSelect } from "../../../components/FormComponent";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import styled from "@material-ui/core/styles/styled";
import "./index.css";

import CustomInput from "./Input";

const content = [
  { name: "legalName", label: "Legal Name", lw: 88 },
  { name: "tradingName", label: "Trading Name", lw: 106 },
  { name: "applicationRefNumber", label: "App Ref Number", lw: 121 },
  { name: "registrationNumber", label: "Registration Number", lw: 152 },
  { name: "contactPerson", label: "Contact Person", lw: 118 },
  { name: "contactEmail", label: "Contact Email", lw: 104 },
  { name: "contactMobile", label: "Contact Mobile", lw: 111 },
  { name: "headOffice", label: "Head Office", lw: 90 },
  { name: "auditAddress", label: "Audit Address", lw: 111 },
  { name: "country", label: "Country", lw: 60 }
];

const BtnContainer = styled(ButtonGroup)({
  margin: ".5rem 1rem 1rem"
});

const StyledBtn = styled(Button)({
  marginLeft: "10px"
});

const StyledPaper = styled(Paper)({
  margin: "2rem",
  padding: "1rem"
});

export const Content = () => {
  let initialize = {};
  content.map(data => {
    return (initialize[data.name] = "");
  });

  const [values, setValues] = React.useState({
    ...initialize
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleOnClick = () => {
    console.log(values);
  };

  return (
    <form autoComplete="off">
      {content.map(data => (
        <CustomInput
          {...data}
          key={data.name}
          values={values[data.name]}
          handleChange={handleChange(data.name)}
        />
      ))}
      <BtnContainer fullWidth variant="contained">
        <Button onClick={handleOnClick} color="primary">
          Submit
        </Button>
        <Button>Cancel</Button>
      </BtnContainer>
    </form>
  );
};

// ===================================================================
// ==========================REDUX FORM===============================
// ===================================================================

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div style={{ marginBottom: "1rem" }}>
    <InputLabel>{label}</InputLabel>
    <div>
      <Input fullWidth {...input} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const renderContacts = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    {fields.map((contacts, index) => (
      <li key={index}>
        <h4>Contact #{index + 1}</h4>
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
        variant="outlined"
        type="button"
        onClick={() => fields.push({})}
      >
        Add Contact
      </StyledBtn>
      {submitFailed && error && <span>{error}</span>}
    </div>
  </ul>
);

const FieldArraysForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;

  const handleOnSubmit = values => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <Field
        name="legalName"
        type="text"
        component={renderField}
        label="Legal Name"
      />
      <Field
        name="tradingName"
        type="text"
        component={renderField}
        label="Trading Name"
      />
      <Field name="abn" type="text" component={renderField} label="ABN" />
      <Field name="acn" type="text" component={renderField} label="ACN" />
      <StyledPaper>
        <FieldArray name="contacts" component={renderContacts} />
      </StyledPaper>
      <Field
        name="headOffice"
        type="text"
        component={renderField}
        label="Head Office"
      />
      <Field name="state" type="text" component={renderField} label="State" />
      <Field
        name="country"
        type="text"
        data={["New Zealand", "Australia"]}
        component={CustomSelect}
        label="Country"
      />
      <div style={{ marginBottom: "1rem" }}>
        <StyledBtn variant="outlined" type="submit" disabled={submitting}>
          Submit
        </StyledBtn>
        <StyledBtn
          variant="outlined"
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear Values
        </StyledBtn>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "fieldArrays", // a unique identifier for this form
  validate,
  initialValues: {
    contacts: [{ name: "", email: "", mobile: "" }]
  }
})(FieldArraysForm);
