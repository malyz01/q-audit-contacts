import React from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages";
import Navigation from "./Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
