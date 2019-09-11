import React from "react";
import { FormControl, TextField, Button } from "@material-ui/core";

import "./index.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>This is home page</h1>
        <div className="container">
          <FormControl>
            <TextField
              id="outlined-search"
              label="Username"
              type="text"
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-search"
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
            />
            <Button>Submit</Button>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default Home;
