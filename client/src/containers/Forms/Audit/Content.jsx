import React from "react";
import { Field, reduxForm } from "redux-form";
import "./index.css";

import { StyledBtn, renderField, DatePickers } from "../FormComponents";
import { CustomSelect } from "../../../components/FormComponent";

const AuditForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;

  const handleOnSubmit = values => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <Field
        name="country"
        type="text"
        data={["Australia", "New Zealand"]}
        component={CustomSelect}
        label="Country"
      />
      <Field
        name="startDate"
        type="text"
        component={DatePickers}
        label="Start Date"
      />
      <Field
        name="endDate"
        type="text"
        component={DatePickers}
        label="End Date"
      />
      <Field
        name="dateStatus"
        type="text"
        data={["Proposed", "Tentative", "Confirmed"]}
        component={CustomSelect}
        label="Status of Date"
      />
      <Field
        name="auditAddress"
        type="text"
        component={renderField}
        label="Audit Address"
      />
      <Field
        name="standards"
        type="text"
        data={["NDIS", "ACIS2018", "HSQF", "ISO9000"]}
        component={CustomSelect}
        label="Standards"
      />
      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
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
  form: "faudit" // a unique identifier for this form
})(AuditForm);
