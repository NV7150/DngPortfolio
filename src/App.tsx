import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {createStyles, makeStyles, ThemeProvider} from "@material-ui/styles";

import './App.css';

import theme from "./Theme";

import Home from "./views/Home"
import Profile from "./views/Profile";
import {Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: "#282c34"
        },
    })
)

function App() {
    const classes = useStyles();
  return (
    <div className={"App " + classes.root}>
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
