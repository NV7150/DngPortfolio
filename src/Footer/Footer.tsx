import React from "react";
import {Grid, Theme, Toolbar} from "@material-ui/core";
import LinkButton from "../GeneralComponents/LinkButton";
import {Page} from "../Pages";
import {createStyles, makeStyles} from "@material-ui/styles";


interface FooterProps {
    pages: Page[]
}

const fontSize: string = "1rem";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        buttons: {
            marginRight: "5vw",
        },
        bar: {
            top: "auto",
            bottom: 0,
            backgroundColor: "black",
            borderTop: "0.25vh solid aliceblue"
        },
    })
)

const Footer = (props: FooterProps) => {
    const classes = useStyles();

    const buttons = props.pages.map((page, i) => {
        return (
            <Grid item className={classes.buttons} key={i}>
                <LinkButton linkName={page.name} linkTo={page.link} fontSize={fontSize}  />
            </Grid>
        );
    });

    return (
        <Toolbar className={classes.bar}>
            <Grid container direction={"row"} justify={"center"}>
                {buttons}
            </Grid>
        </Toolbar>
    )
}

export default Footer;