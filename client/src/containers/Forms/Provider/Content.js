import React from "react";
import Input from "./Input";

export const FirstColumn = () => {
  const firstContent = [
    { name: "legalName", label: "Legal Name", lw: 88 },
    { name: "tradingName", label: "Trading Name", lw: 104 },
    { name: "applicationRefNumber", label: "App Ref Number", lw: 121 },
    { name: "registrationNumber", label: "Registration Number", lw: 151 },
    { name: "location", label: "Location", lw: 65 },
    { name: "country", label: "Country", lw: 60 }
  ];

  let initialize = {};
  firstContent.map(data => {
    return (initialize[data.name] = "");
  });

  const [values, setValues] = React.useState({
    ...initialize
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return firstContent.map(data => (
    <Input
      {...data}
      key={data.name}
      values={values[data.name]}
      handleChange={handleChange(data.name)}
    />
  ));
};

export const SecondColumn = () => {
  const secondContent = [
    { name: "legalName", label: "Legal Name", lw: 88 },
    { name: "tradingName", label: "Trading Name", lw: 104 },
    { name: "applicationRefNumber", label: "App Ref Number", lw: 121 },
    { name: "registrationNumber", label: "Registration Number", lw: 151 },
    { name: "location", label: "Location", lw: 65 },
    { name: "country", label: "Country", lw: 60 }
  ];

  let initialize = {};
  secondContent.map(data => {
    return (initialize[data.name] = "");
  });

  const [values, setValues] = React.useState({
    ...initialize
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return secondContent.map(data => (
    <Input
      {...data}
      key={data.name}
      values={values[data.name]}
      handleChange={handleChange(data.name)}
    />
  ));
};
