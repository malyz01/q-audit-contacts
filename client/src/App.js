import React from "react";
import Home from "./containers/Homepage";
import AuditorForm from "./containers/Forms/AuditorForm";
import Contact from "./containers/ContactPage";

function App() {
  return (
    <div className="App">
      <AuditorForm />
      <Contact />
    </div>
  );
}

export default App;
