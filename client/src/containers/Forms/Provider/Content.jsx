import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "./validate";
import "./index.css";

import {
  StyledBtn,
  StyledPaper,
  renderField,
  renderContacts,
  renderOutlets
} from "./Fields";
import { CustomSelect } from "../../../components/FormComponent";

const ProviderForm = props => {
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
      <FieldArray name="outlets" component={renderOutlets} />
      <Field name="state" type="text" component={renderField} label="State" />
      <Field
        name="country"
        type="text"
        data={["New Zealand", "Australia"]}
        component={CustomSelect}
        label="Country"
      />
      <div style={{ marginBottom: "1rem" }}>
        <StyledBtn
          variant="contained"
          color="primary"
          type="submit"
          disabled={submitting}
        >
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
})(ProviderForm);
