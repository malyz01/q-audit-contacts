import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./containers/Main";
import Navigation from "./containers/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Main />
    </BrowserRouter>
  );
}

export default App;
