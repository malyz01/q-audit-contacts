import React from "react";
import Input from "./Input";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import styled from "@material-ui/core/styles/styled";

const content = [
  { name: "legalName", label: "Legal Name", lw: 88 },
  { name: "tradingName", label: "Trading Name", lw: 106 },
  { name: "applicationRefNumber", label: "App Ref Number", lw: 121 },
  { name: "registrationNumber", label: "Registration Number", lw: 152 },
  { name: "contactPerson", label: "Contact Person", lw: 118 },
  { name: "contactEmail", label: "Contact Email", lw: 104 },
  { name: "contactMobile", label: "Contact Mobile", lw: 111 },
  { name: "location", label: "Location", lw: 65 },
  { name: "country", label: "Country", lw: 60 }
];

const BtnContainer = styled(ButtonGroup)({
  margin: ".5rem 1rem 1rem"
});

const Content = () => {
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

  return (
    <>
      {content.map(data => (
        <Input
          {...data}
          key={data.name}
          values={values[data.name]}
          handleChange={handleChange(data.name)}
        />
      ))}
      <BtnContainer fullWidth variant="contained">
        <Button color="primary">Submit</Button>
        <Button>Cancel</Button>
      </BtnContainer>
    </>
  );
};

export default Content;
