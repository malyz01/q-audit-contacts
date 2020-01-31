import React from "react";
import { Field } from "redux-form";

import { StyledBtn, renderField } from "../FormComponents";

export const renderOutlets = ({ fields, meta: { error, submitFailed } }) => (
  <div style={{ paddingLeft: "4rem", marginBottom: "1rem" }}>
    {fields.map((outlet, index) => (
      <div key={index}>
        <h4>Outlet {index + 1}</h4>
        <Field
          name={`${outlet}.branchName`}
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

export const renderContacts = ({ fields, meta: { error, submitFailed } }) => (
  <div style={{ marginBottom: "2rem" }}>
    {fields.map((contacts, index) => (
      <div key={index}>
        <h4>Contact {index + 1}</h4>
        <Field
          name={`${contacts}.name`}
          type="text"
          component={renderField}
          label="Full name"
        />
        <Field
          name={`${contacts}.position`}
          type="text"
          component={renderField}
          label="Position"
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
        color="primary"
        type="button"
        onClick={() => fields.push({})}
      >
        Add Contact
      </StyledBtn>
      {submitFailed && error && <span>{error}</span>}
    </div>
  </div>
);
