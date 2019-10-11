import React from "react";
import ReactTable from "react-table";
import { Paper, Box, Fab } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

class AuditsDone extends React.Component {
  handleOnClick = props => e => {
    if (props === "Completed") {
      alert("ADD COMPLETED AUDITS");
    } else {
      alert("ADD PENDING AUDITS");
    }
  };

  render() {
    const { audit } = this.props;
    return (
      <Paper elevation={2}>
        <Box component="div" p={2}>
          <Box display="flex" alignItems="center">
            <Box width="40%">
              <Fab
                size="small"
                color="primary"
                aria-label="add"
                onClick={this.handleOnClick(audit.type)}
              >
                <AddIcon />
              </Fab>
            </Box>
            <Box
              fontFamily="Roboto"
              letterSpacing={2}
              fontSize={18}
              fontWeight={700}
            >
              {audit.type.toUpperCase()}
            </Box>
          </Box>
          <Box mt={3}>Audits list</Box>
        </Box>
      </Paper>
    );
  }
}

export default AuditsDone;
