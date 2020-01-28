import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "./validate";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import styled from "@material-ui/core/styles/styled";

import Input from "./Input";

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
        <Input
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

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const renderHobbies = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>
        Add Hobby
      </button>
    </li>
    {fields.map((hobby, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Hobby"
          onClick={() => fields.remove(index)}
        />
        <Field
          name={hobby}
          type="text"
          component={renderField}
          label={`Hobby #${index + 1}`}
        />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
);

const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add Member
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((member, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Member"
          onClick={() => fields.remove(index)}
        />
        <h4>Member #{index + 1}</h4>
        <Field
          name={`${member}.firstName`}
          type="text"
          component={renderField}
          label="First Name"
        />
        <Field
          name={`${member}.lastName`}
          type="text"
          component={renderField}
          label="Last Name"
        />
        <FieldArray name={`${member}.hobbies`} component={renderHobbies} />
      </li>
    ))}
  </ul>
);

const FieldArraysForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="clubName"
        type="text"
        component={renderField}
        label="Club Name"
      />
      <FieldArray name="members" component={renderMembers} />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "fieldArrays", // a unique identifier for this form
  validate
})(FieldArraysForm);
