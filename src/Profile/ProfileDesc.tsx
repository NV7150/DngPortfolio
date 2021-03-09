import React from "react";
import {createStyles, makeStyles} from "@material-ui/styles";
import {Grid, Theme} from "@material-ui/core";

type ProfileDescProps = {
    desc: string[]
}

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
        descArea: {
            padding: theme.spacing(2)
        }
    })
)


const ProfileDesc = (props: ProfileDescProps) => {
    const classes = useStyles();

    const desces = props.desc.map((descElem, i) => {
        return (
            <Grid xs={12} key={i} item>
                &nbsp;&nbsp;{descElem}
            </Grid>
        )
    });

    return (
        <Grid item xs={12} container direction={"row"} className={classes.root}>
            <Grid item xs={12} className={classes.title}> Dango.profile </Grid>
            <Grid item xs={12} container className={classes.descArea}>
                {desces}
            </Grid>
        </Grid>
    )
};
export default ProfileDesc;