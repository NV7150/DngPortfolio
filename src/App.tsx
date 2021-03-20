import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import {createStyles, makeStyles, ThemeProvider} from "@material-ui/styles";
import {Box, Theme} from "@material-ui/core";

import Footer from "./Footer/Footer";

import './App.css';

import theme from "./Theme";
import Pages from "./Pages";
import ScrollToTop from "./GeneralComponents/ScrollToTop";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: "#282c34",
        }
    })
)

function App() {
    const classes = useStyles();
    const routes = Pages.map((page, i) => {
        return (<Route exact={page.exact} path={page.link} component={page.component} key={page.id} />);
    });

    return (
    <Box className={"App " + classes.root}>
        <ThemeProvider theme={theme}>
            <Box minHeight={"100vh"}>
                <Router >
                    <ScrollToTop />
                    <Switch>
                        {routes}
                    </Switch>
                    <Footer pages={Pages} />
                </Router>
            </Box>
        </ThemeProvider>
    </Box>
    );
}

export default App;
