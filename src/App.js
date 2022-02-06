import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Settings from "./pages/Setting"
import Questions from "./pages/Questions"
import FinalScreen from "./pages/FinalScreen";
import { Box, Container, Typography } from '@mui/material';

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Switch>
            <Route path="/" exact>
              <Typography variant="h2" fontWeight="bold">Quiz App</Typography>
              <Settings/>
            </Route>
            <Route path="/questions">
              <Questions/>
            </Route>
            <Route path="/score">
              <FinalScreen/>
            </Route>
          </Switch>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
