import React from "react";
import {Box, Grid, Theme} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/styles";

type PropertyProps = {
    propName: string;
    propKeyword: Array<string>;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            fontSize: "2.5rem",
            padding: theme.spacing(2)
        },
        title: {
            color: theme.palette.secondary.main
        }
    })
)


const Property = (props: PropertyProps) => {
    const classes = useStyles();

    let keywords = props.propKeyword.map((keyword, i) => {
        return (
            <Box p={1}>{keyword + ((i !== props.propKeyword.length - 1) ? ",": "")}</Box>
        );
    });


    return (
        <Grid container alignItems={"flex-start"} className={classes.root}>
            <Grid item xs={3} className={classes.title}>
                {props.propName}
            </Grid>
            <Grid item xs={1}>
                :
            </Grid>
            <Grid item xs={8}>
                <Box display="flex" flexWrap="wrap">
                    {keywords}
                </Box>
            </Grid>
        </Grid>
    );
};

export default Property;