import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Home from "./views/Home"
import {ThemeProvider} from "@material-ui/styles";
import theme from "./Theme";

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
          <Router>
            <Route exact path="/" component={Home} />
          </Router>
        </ThemeProvider>
    </div>
  );
}

export default App;
