import React from "react";
import {createStyles, makeStyles} from "@material-ui/styles";
import {Grid, Theme} from "@material-ui/core";

import PropertyList from "../GeneralComponents/PropertyList";

type ProfData = {
    univ: string,
    hs: string,
    lang: Array<string>,
    skills: Array<string>,
    hobby: Array<string>
}

type ProfileInfoProps = {
    info: ProfData;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            fontSize: "1.5rem",
            padding: theme.spacing(2)
        },
        title: {
            fontSize: "3rem",
            color: theme.palette.primary.main,
            borderBottom: "0.5vh solid aliceblue",
        },
        bracket: {
            marginTop: "1rem"
        }
    })
)

const propStyle = {
    fontSize: "1.5rem",
    indent: "10vw"
}


const ProfileInfo = (props: ProfileInfoProps) => {
    const classes = useStyles();
    const info: ProfData = props.info;

    return (
        <Grid container direction={"row"} className={classes.root}>
            <Grid item xs={12} className={classes.title}>
                Dango.info
            </Grid>
            <Grid item xs={12} className={classes.bracket}>
                {"{"}
            </Grid>
            <PropertyList<ProfData> info={info} styles={propStyle} />
            <Grid item xs={12}>
                {"}"}
            </Grid>
        </Grid>
    );

};

export default ProfileInfo;