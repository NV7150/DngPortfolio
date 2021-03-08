import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {ThemeProvider} from "@material-ui/styles";

import './App.css';

import theme from "./Theme";

import Home from "./views/Home"
import Profile from "./views/Profile";

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
          <Router>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
          </Router>
        </ThemeProvider>
    </div>
  );
}

export default App;
