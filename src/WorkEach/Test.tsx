import React from "react";
import {Box, Paper, Theme, Typography} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            height: "100%",
        },

        typoTest: {
            marginBottom: "100vh"
        }
    })
)

export default function Test(){
    const classes = useStyles();
    return (
        <Box className={classes.root} id={"modal-title"}>
            <Box className={classes.typoTest}> テスト</Box>
            テスト
        </Box>
    );
}