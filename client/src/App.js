import React from "react";
import { BrowserRouter } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Main from "./containers/Main";
import Navigation from "./containers/Navigation";

function App() {
  return (
    <Box p={2}>
      <BrowserRouter>
        <Navigation />
        <Main />
      </BrowserRouter>
    </Box>
  );
}

export default App;
