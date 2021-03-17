import React from "react";
import LinkButton from "../GeneralComponents/LinkButton";
import {Grid, Theme} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/styles";

interface Sns{
    name: string,
    link: string,
    icon: string
}

interface ProfileContactProps{
    sns: Sns[]
}
const styleSettings = {
    fontSize: "2rem"
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2),
            fontSize: "1.5rem"
        },
        content: {
            padding: theme.spacing(2),
        },
        buttonGrid: {
            marginTop: theme.spacing(2)
        },
        title: {
            fontSize: "3rem",
            color: theme.palette.primary.main,
            borderBottom: "0.5vh solid aliceblue",
        }
    })
)

const ProfileContact = (props: ProfileContactProps) => {
    const classes = useStyles();

    const button = props.sns.map((snsElem, i) => {
        return(
            <Grid item xs={6} sm={4} md={3} key={i} className={classes.buttonGrid}>
                <LinkButton
                    linkName={snsElem.name}
                    linkTo={snsElem.link}
                    fontSize={styleSettings.fontSize}
                />
            </Grid>
        );
    })

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.title}>
                Dango.contact
            </Grid>

            <Grid item xs={12} container direction="row" className={classes.content}>
                {button}
            </Grid>
        </Grid>
    )
}

export default ProfileContact;